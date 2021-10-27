const base_url = "https://localhost:44379";
export const APIExams = {
    exams:{
        url:base_url+"/api/Exams",
        params:{},
        method:"GET"
    },
    add_exam:{
        url:base_url+"/api/Exams",
        params:JSON.stringify({
            idexam:0,
            name:'',
            dateexam:'',
            lodifficult:'',
            timemake:'',
        }),
        method:"POST"
    },
    detail_exam:{
        url:base_url+"/api/Exams/",// +id
        params:{},
        method:"GET"
    },
    edit_exam:{
        url:base_url+"/api/Exams/",// +id
        params:JSON.stringify({
            idexam:0,
            name:'',
            dateexam:'',
            lodifficult:'',
            timemake:'',
        }),
        method:"PUT"
    },
    delete_exam:{
        url:base_url+"/api/Exams/",// +id
        params:{},
        method:"DELETE"
    }
}