import React from "react";
import axios from "axios";
import {APIQuestionAndExam} from "../API/APIQuestionAndExam";
import {Link, Redirect} from "react-router-dom";
import {APIQuestions} from "../API/APIQuestions";
import {APIExams} from "../API/APIExams";

export default class AddQandE extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            qandexam:{
                question:'',
                answer:'',
                id:''
            },
            question:[],
            exam:[],
            redirect:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        axios.get(APIQuestions.questions.url).then(rs=>{
            this.setState({
                question:rs.data
            })
        })
        axios.get(APIExams.exams.url).then(rs=>{
            this.setState({
                exam:rs.data
            })
        })
    }

    handleChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let qandexam = this.state.qandexam;
        qandexam[key] = v;
        this.setState({
            qandexam:qandexam
        })
    }
    submit(event){
        var token='';
        const qandexam = this.state.qandexam;
        const json = JSON.stringify(qandexam);//chuyển object sang json để up lên api
        axios.post(APIQuestionAndExam.add_qandexam.url,json,{
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':"*",
                'Authorization':'Bearer'+token
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        }).catch(err=>{
            alert("Xin hãy chọn mã câu hỏi và mã bài thi");
        })

        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const qandexam= this.state.qandexam;
        const question = this.state.question;
        const exam = this.state.exam;
        let e;

        return (
            <div>
                {redirect ? <Redirect to="/qandexams"/> : null}
                <h1>Add Question and Answer</h1>

                <div className="row">

                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>ID</label>
                                <input name="id" onChange={this.handleChange} value={qandexam.id}
                                       className="form-control" placeholder="Nhập id" required/>
                            </div>
                            <div className="form-group">
                                <label>Question</label>
                                <select  name="question" onChange={this.handleChange} className="form-control"  required>
                                    <option>ID|Content</option>
                                    {

                                        question.map((e,k)=>{
                                            return <option key={k} value={e.idquestion} >
                                                {e.idquestion} | {e.contentq}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Exam</label>
                                <select  name="idexam" onChange={this.handleChange} className="form-control"  required>
                                    <option>ID|Name exam</option>
                                    {

                                        exam.map((e,k)=>{
                                            return <option key={k} value={e.idexam} >
                                                {e.idexam} | {e.name}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Ngày làm</label>
                                <input name="datemake"  onChange={this.handleChange}
                                          value={qandexam.datemake} className="form-control" type="date" placeholder="Nhập ngày làm" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}