import React from "react";
import axios from "axios";
import {APIExams} from "../API/APIExams";
import {Redirect} from 'react-router-dom';
export default class AddExam extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            exam:{
                idexam:'',
                name:'',
                dateexam:'',
                lodifficult:'',
                timemake:'',
            },
            redirect:false

        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e){
        const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let exam = this.state.exam;

        exam[key] = v;// gan gia tri cua property nhu dang array
        this.setState({
            exam: exam
        })
    }
    submit(event){
        var token ='';//lay tu dau do
        const exam = this.state.exam;
        const json = JSON.stringify(exam);
        axios.post(APIExams.add_exam.url,json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*",
                'Authorization': 'Bearer'+token
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        }).catch(err=>{
          alert("Id bị trùng");
        })
        event.preventDefault();
    }
    render() {

        const redirect = this.state.redirect;
        const exam = this.state.exam;
        return (
            <div>
                {redirect?<Redirect to="/exams"/>:null}
                <h1>Add exam</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Id exam</label>
                                <input name="idexam" type="text" onChange={this.handleChange} value={exam.idexam}

                              placeholder="Nhập id"         className="form-control" minLength="1" maxLength="12" required/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" placeholder="Nhập name" onChange={this.handleChange} value={exam.name} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Ngày tạo đề</label>
                                <input name="dateexam" onChange={this.handleChange} value={exam.dateexam} type="date" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Độ khó</label>
                                <input name="lodifficult" placeholder="Nhập độ khó" onChange={this.handleChange} value={exam.lodifficult} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Thời gian làm</label>
                                <input name="timemake" placeholder="Nhập thời gian làm bài"  type="number" onChange={this.handleChange} value={exam.timemake} className="form-control" pattern="[-+]?[0-9]" title="Xin mòi nhập số nguyên" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
}