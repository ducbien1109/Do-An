import instance from "./axios"

const getList = {
    getAll(){
        return instance.get('/bien')
    },
    getDetail(id){
        return instance.get(`/bien/${id}`)
    },
    create(body){
        return instance.post('/bien',body)
    },
    update(body,id){
        return instance.put(`/bien/${id}`, body)
    },
    delete(id){
        return instance.delete(`/bien/${id}`)
    }
}
export default getList