import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://tse2-mm.cn.bing.net/th/id/OIP-C.JuSM25g1b2eEYu-2KbGpVwHaHI?rs=1&pid=ImgDetMain",
        siteTitle: "我的个人空间",
        github: "https://github.com/hkp4570",
        qq: "1132272123",
        qqQrCode:
            "",
        weixin: "hkp4579",
        weixinQrCode:
            "",
        mail: "colourful4570@gmail.com",
        icp: "晋ICP备17001719号",
        githubName: "hkp4570",
        favicon: "",
    },
});
