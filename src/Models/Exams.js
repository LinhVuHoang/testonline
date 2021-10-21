import React  from "react";
import {APIExams} from "../API/APIExams";
import axios from "axios";
import {Link} from "react-router-dom";
export  default class Exams extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            exams: [],
        }
        this.refresh =this.refresh.bind(this);
}
componentDidMount() {
    axios.get(APIExams.exams.url).then(rs=>{
        this.setState({
            exams:rs.data
        })
    })
}
async deleteExam(id){
    const rs=await axios.delete(APIExams.delete_exam.url+id);
    if(rs.status === 204){
        this.refresh();
    }else {
        alert("error!");
    }
}
    refresh(){
        axios.get(APIExams.exams.url)
            .then(rs=>{
                this.setState({
                    exams:rs.data, //lấy data
                })
            })
    }
    render() {
        const exams = this.state.exams;
        return (
            <div>
                <h1>Exams</h1>
                <div className="row">
                    <section className="col-12 text-right">
                        <Link to = "/add-exam" className="btn btn-primary">Add Exam</Link>
                    </section>
                    <section className="col-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>IdExam</th>
                                <th>Name</th>
                                <th>Date Exam</th>
                                <th>Level</th>
                                <th>Time make(Minutes)</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                            exams.map((e,k)=>{
                                return <tr key={k}>
                                    <td>{e.idexam}</td>
                                    <td>{e.name}</td>
                                    <td>{e.dateexam.split("T00:00:00")}</td>
                                    <td>{e.lodifficult}</td>
                                    <td>{e.timemake}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary" to={"/edit-exam/"+e.idexam}>Edit</Link>&nbsp;
                                        <button type="button" onClick={this.deleteExam.bind(this,e.idexam)} className="btn btn-outline-danger">Delete</button>
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