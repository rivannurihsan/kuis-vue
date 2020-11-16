var app = new Vue({
    el: '#App',

    data: {
        users: [
            {
                name: 'Muhammad Iqbal Mubarok'
            }, {
                name: 'Ruby Purwanti'
            }, {
                name: 'Faqih Muhammad'
            }
        ],
        id: " ",
        Create_User: " ",
        UpdateData: false
    },

    methods: {
        CreateUser() {
            if (this.Create_User != ' ') {
                this
                    .users
                    .push({name: this.Create_User});
                this.Create_User = ' ';
            }
        },
        UpdateUser(data, desc) {
            this
                .users[data]
                .name = desc
            this.Create_User = ' ';
            this.UpdateData = false;
        },
        EditUser(data, desc) {
            this.UpdateData = true
            this.id = data
            this.Create_User = desc
        },
        DeleteUser(data) {
            let result = confirm("Anda yakin ?");
            if (result) {
                this
                    .users
                    .splice(data, 1)
            }
        }
    }
});
