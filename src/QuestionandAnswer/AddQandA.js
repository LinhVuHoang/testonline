import React from "react";
import axios from "axios";
import {APIQuestionAndAnswers} from "../API/APIQuestionAndAnswers";
import {Link, Redirect} from "react-router-dom";
import {APIQuestions} from "../API/APIQuestions";

export default class AddQandA extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            qandas:{
                question:'',
                answer:'',
                id:''
            },
            question:[],
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
    }

    handleChange(e){
        const key = e.target.name;
        const v = e.target.value;
        let qandas = this.state.qandas;
        qandas[key] = v;
        this.setState({
            qandas:qandas
        })
    }
    submit(event){
        var token='';
        const qandas = this.state.qandas;
        const json = JSON.stringify(qandas);//chuyển object sang json để up lên api
        axios.post(APIQuestionAndAnswers.add_qanda.url,json,{
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
            alert("Xin hãy chọn mã câu hỏi");
        })

        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const qandas= this.state.qandas;
        const question = this.state.question;
        let e;

        return (
            <div>
                {redirect ? <Redirect to="/qandas"/> : null}
                <h1>Add Question and Answer</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>ID</label>
                                <input name="id" onChange={this.handleChange} value={qandas.id}
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
                                <label>Answer</label>
                                <textarea name="answer"  onChange={this.handleChange}
                                          value={qandas.answer} className="form-control" placeholder="Nhập answer" required/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </sectionc>
                </div>
            </div>
        )
    }
}