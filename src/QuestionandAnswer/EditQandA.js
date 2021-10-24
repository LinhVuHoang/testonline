import React from "react";
import {Redirect,withRouter} from "react-router-dom";
import axios from "axios";
import {APIQuestionAndAnswers} from "../API/APIQuestionAndAnswers";
import {APIQuestions} from "../API/APIQuestions";
class EditQandA extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qandas: {
                question: '',
                answer: '',
                id: ''
            },
            question: [],
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(APIQuestionAndAnswers.detail_qanda.url+id).then(rs=> {
            this.setState({
                qandas: rs.data
            })
        })
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
        const qandas = this.state.qandas;
        const json = JSON.stringify(qandas);
        axios.put(APIQuestionAndAnswers.edit_qanda.url+qandas.id,json,{
            headers:{
                'Content-Type':'application/json'
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
        const qandas= this.state.qandas;
        const question = this.state.question;
        let e;

        return (
            <div>
                {redirect ? <Redirect to="/qandas"/> : null}
                <h1>Edit {qandas.id}</h1>

                <div className="row">

                    <sectionc className="col-6 text-left">
                        <form onSubmit={this.submit} method="post">
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

export default withRouter(EditQandA);