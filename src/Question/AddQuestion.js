import React from "react";
import axios from "axios";
import {APIQuestions} from "../API/APIQuestions";
import {Redirect} from 'react-router-dom';
export default class AddQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            question:{
                idquestion:0,
                contentq:'',
                answertrue:'',
                answer1false:'',
                answer2false:'',
                answer3false:'',
                lodifficult:'',
                dateq:'',
                point:0.00,
            },
            redirect:false

        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    handleChange(e){
        const key = e.target.name;// lay dc name cua input
        const v = e.target.value;// lay dc value cua input ->gia tri vua dien
        let question = this.state.question;

        question[key] = v;// gan gia tri cua property nhu dang array
        this.setState({
            question:question
        })
    }
    submit(event){
        var token ='';//lay tu dau do
        const question = this.state.question;
        const json = JSON.stringify(question);
        axios.post(APIQuestions.add_question.url,json,{
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*",
                'Authorization': 'Bearer'+token
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        })
        event.preventDefault();
    }
    render() {

        const redirect = this.state.redirect;
        const question = this.state.question;
        return (
            <div>
                {redirect?<Redirect to="/questions"/>:null}
                <h1>Add question</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Content</label>
                                <textarea name="contentq" placeholder="Nh???p n???i dung c??u h???i" onChange={this.handleChange} value={question.contentq} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Answer true</label>
                                <textarea name="answertrue" placeholder="Nh???p c??u tr??? l???i ????ng"  onChange={this.handleChange} value={question.answertrue} className="form-control"  required/>
                            </div>
                            <div className="form-group">
                                <label>Answer false 1</label>
                                <textarea name="answer1false" placeholder="Nh???p c??u tr??? l???i sai"  onChange={this.handleChange} value={question.answer1false} className="form-control"  required/>
                            </div>
                            <div className="form-group">
                                <label>Answer false 2</label>
                                <textarea name="answer2false" placeholder="Nh???p c??u tr??? l???i sai"  onChange={this.handleChange} value={question.answer2false} className="form-control"  required/>
                            </div>
                            <div className="form-group">
                                <label>Answer false 3</label>
                                <textarea name="answer3false" placeholder="Nh???p c??u tr??? l???i sai"  onChange={this.handleChange} value={question.answer3false} className="form-control"  required/>
                            </div>
                            <div className="form-group">
                                <label>????? kh??</label>
                                <input name="lodifficult" placeholder="Nh???p ????? kh??" onChange={this.handleChange} value={question.lodifficult} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Ng??y t???o c??u</label>
                                <input name="dateq" onChange={this.handleChange} value={question.dateq} type="date" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>??i???m c??u:</label>
                                <input name="point" onChange={this.handleChange} value={question.point} type="number" min="0.25" max="5.0" step="0.25"  placeholder='0.00' title="??i???m ph???i l?? s??? nguy??n ho???c th???p ph??n <5" required/>
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