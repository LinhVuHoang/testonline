import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {APIQuestions} from "../API/APIQuestions";
import {APIExams} from "../API/APIExams";
export  default class Questions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        }
        this.refresh =this.refresh.bind(this);
    }
    componentDidMount() {
        axios.get(APIQuestions.questions.url).then(rs=>{
            this.setState({
                questions:rs.data
            })
        })
    }
    async deleteQuestion(id){
        const rs=await axios.delete(APIQuestions.delete_question.url+id);
        if(rs.status === 204){
            this.refresh();
        }else {
            alert("Error");
        }

    }
    refresh(){
        axios.get(APIQuestions.questions.url)
            .then(rs=>{
                this.setState({
                    questions:rs.data, //lấy data
                })
            })
    }
    render() {
        const question = this.state.questions;
        return (
            <div>
                <h1>Questions</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to = "/add-question" className="btn btn-primary">Add Question</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>IdQuestion</th>
                                <th>Content</th>
                                <th>Answer</th>
                                <th>Level</th>
                                <th>Date Make</th>
                                <th>Point</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                question.map((e,k)=>{
                                    return <tr key={k}>
                                        <td>{e.idquestion}</td>
                                        <td>{e.contentq}</td>
                                        <td>{e.answer}</td>
                                        <td>{e.lodifficult}</td>
                                        <td>{e.dateq.split("T00:00:00")}</td>
                                        <td>{e.point}</td>
                                        <td>
                                            <Link className="btn btn-outline-primary" to={"/edit-question/"+e.idquestion}>Edit</Link>&nbsp;
                                            <button type="button" onClick={this.deleteQuestion.bind(this,e.idquestion)} className="btn btn-outline-danger">Delete</button>
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