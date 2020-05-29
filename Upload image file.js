//HTML
<img class="rounded-circle col-w-80p avatar" :src="user.avatar_url">
<input accept=".png, .jpg, .jpeg, .bmp" type="file" style="display: none;" @change="selectFloorBackground">

//Javascript
selectFloorBackground: function (evt) {
            var self = this;
            if (evt.target.files && evt.target.files[0]) {
                var reader = new FileReader();
                var type = evt.target.files[0].type;
                if( type == "image/jpeg" || type == "image/png" || type == "image/gif" || type == "image/svg+xml" ){
                    reader.onload = function (e) {
                        self.user.avatar_url = e.target.result;
                        self.user.image = evt.target.files[0];
                    };
                    reader.readAsDataURL(evt.target.files[0]);
                } else {
                    alert('Please select an image file!')
                }
            }
        },
