const config = {
    image: "assets/images/",

    /**
     * 
     * @param {string} name 
     * @param {string} extension 
     * @returns 
     */
    getImage: function(name,extension){
        return extension == undefined ? this.image+name+".png" : this.image+name+extension;
    },
    clans: [
        {
            "code": "ND", "color" : '#28CD00', "name": "Noble Dragon", "amblem": "Blue"
        },
        {
            "code": "RS", "color" : '#00BDCD', "name": "Royal Snake", "amblem": "Purple"
        },
        {
            "code": "GT", "color" : '#CD2F00', "name": "Golden Tiger", "amblem": "Red"
        },
        {
            "code": "N",  "color" : '#B8B8B8', "name": "Nangin", "amblem": "Grey"
        }
    ]
}


const lnw33 = {
    user_id: 0,
    email: "",
    token: "",
};

