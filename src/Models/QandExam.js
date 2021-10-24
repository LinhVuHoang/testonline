import React  from "react";
import axios from "axios";
import {APIQuestionAndExam} from "../API/APIQuestionAndExam";
import {Link} from "react-router-dom";
export default class QandExam extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qandexam: [],
        }
        this.refresh = this.refresh.bind(this);
    }
    componentDidMount() {
        axios.get(APIQuestionAndExam.qandexams.url).then(rs=>{
            this.setState({
                qandexam:rs.data
            })
        })
    }
    async deleteQandExams(id){
        const rs=await axios.delete(APIQuestionAndExam.delete_qandexam.url+id);
        if(rs.status === 204){
            this.refresh();
        }else {
            alert("error!");
        }
    }
    refresh(){
        axios.get(APIQuestionAndExam.qandexams.url)
            .then(rs=>{
                this.setState({
                    qandexam:rs.data, //lấy data
                })
            })
    }
    render() {
        const qandexam = this.state.qandexam;
        return (
            <div>
                <h1>Question and Exam</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to="/add-qandexam" className="btn btn-primary">Add Question and Exam</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>IDExam</th>
                                <th>IDQuestion</th>
                                <th>Date Make</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                qandexam.map((e, k) => {
                                    return <tr key={k}>
                                        <td>{e.id}</td>
                                        <td>{e.idexam}</td>
                                        <td>{e.question}</td>
                                        <td>{e.datemake.split("T00:00:00")}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary"
                                                  to={"/edit-qandexam/" + e.id}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteQandExams.bind(this, e.id)}
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