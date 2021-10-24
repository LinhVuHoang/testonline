import React  from "react";
import {APIQuestionAndAnswers} from "../API/APIQuestionAndAnswers";
import axios from "axios";
import {Link} from "react-router-dom";
import {APIExams} from "../API/APIExams";
export default class QandAs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qandas: [],
        }
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
        axios.get(APIQuestionAndAnswers.qandas.url).then(rs=>{
            this.setState({
                qandas:rs.data
            })
        })
    }
    async deleteQandAs(id){
        const rs=await axios.delete(APIQuestionAndAnswers.delete_qanda.url+id);
        if(rs.status === 204){
            this.refresh();
        }else {
            alert("error!");
        }
    }
    refresh(){
        axios.get(APIQuestionAndAnswers.qandas.url)
            .then(rs=>{
                this.setState({
                    qandas:rs.data, //lấy data
                })
            })
    }
    render() {
        const qandas = this.state.qandas;
        return (
            <div>
                <h1>Question and Answers</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-qanda" className="btn btn-primary">Add Question and Answer</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Question</th>
                                <th>Answer</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                qandas.map((e, k) => {
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.question}</td>
                                        <td>{e.answer}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary"
                                                  to={"/edit-qanda/" + e.id}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteQandAs.bind(this, e.id)}
                                                    className="btn btn-outline-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        )
    }
}