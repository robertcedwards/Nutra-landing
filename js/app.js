$(document).foundation();
var app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    mounted: function(){
       this.loadItems();
    },
    methods: {
        loadItems: function(){

            // Init variables
            var self = this
            var app_id = "appCsH7ytW2fUJCOU";
            var app_key = "keyLBt6WtuDTOaZ72";
            var table_name = "Inventory";
            this.items = []
            axios.get(
                "https://api.airtable.com/v0/"+app_id+"/"+table_name+"?view=Grid%20view",
                {
                    headers: { Authorization: "Bearer "+app_key }
                }
            ).then(function(response){
                self.items = response.data.records
            }).catch(function(error){
                console.log(error)
            })
        }
    }
})
