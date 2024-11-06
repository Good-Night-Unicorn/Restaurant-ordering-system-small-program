const base = {
    get() {
        return {
            url : "http://localhost:8080/cantingdiancanxiaochengxu/",
            name: "cantingdiancanxiaochengxu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/cantingdiancanxiaochengxu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "餐厅点餐微信小程序"
        } 
    }
}
export default base
