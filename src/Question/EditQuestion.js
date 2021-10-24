import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {APIQuestions} from "../API/APIQuestions";

class EditQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           question: {
                id:'',
                contentq:'',
                answer:'',
                lodifficult:'',
                dateq:'',
                point:'',
            },
            redirect: false

        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id; //lấy id trên url
        axios.get(APIQuestions.detail_question.url+id).then(rs=>{
            this.setState({
                    question: rs.data
                }
            );
        })
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
        const question = this.state.question;
        const json = JSON.stringify(question);
        axios.put(APIQuestions.edit_question.url+question.idquestion,json,{
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(rs=>{
            this.setState({
                redirect:true
            })
        }).catch(err=>{
            alert("id bi trùng");
        })
        event.preventDefault();
    }
    render() {
        const redirect = this.state.redirect;
        const question = this.state.question;
        return (
            <div>
                {redirect?<Redirect to="/questions"/>:null}
                <h1>Edit: {question.contentq}</h1>
                <div className="row">
                    <section className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
                            <div className="form-group">
                                <label>Content</label>
                                <textarea name="contentq" placeholder="Nhập nội dung câu hỏi" onChange={this.handleChange} value={question.contentq} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Answer</label>
                                <textarea name="answer" placeholder="Nhập câu trả lời"  onChange={this.handleChange} value={question.answer} className="form-control"  required/>
                            </div>
                            <div className="form-group">
                                <label>Độ khó</label>
                                <input name="lodifficult" placeholder="Nhập độ khó" onChange={this.handleChange} value={question.lodifficult} className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Ngày tạo câu</label>
                                <input name="dateq" onChange={this.handleChange} value={question.dateq} type="date" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <label>Điểm câu:</label>
                                <input name="point" onChange={this.handleChange} value={question.point} type="number"  placeholder='0.00' title="điểm phải là số nguyên hoặc thập phân" required/>
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
export default withRouter(EditQuestion);