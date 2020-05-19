//HTML
<div :id="'alert'+item.id" class="modal custom-modal fade" data-backdrop="false">
    <div class="modal-dialog modal-sm plate-modal">
        <div id="content" class="modal-content modal-background">
            <div class="modal-header">
                <div class="modal-title d-flex flex-column">
                    <h5 class="address">SOS detected at @{{item.level}} @{{item.locationName}}</h5>
                    <span class="datetime" style="color: #7F8289">16/04/2020 11:44AM</span>
                </div>
                <button type="button" class="close" style="color: white" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="thumbnail">
                    <img :src="assetUrl('/img/ratio_16x9.png')" alt="loading" class="img-fluid" style="height: 230px;"/>
                    <template v-if="item.type=='luxriot'">
                        <div :id="'vid_'+item.cctv_id" :data-id="item.cctv_id" class="video-frame cell"></div>
                    </template>
                    <iframe v-else scrolling="no" frameborder="0" :id="'iframe-'+item.cctv_id" :src="item.streamUrl"></iframe>
                </div>
            </div>
            <div class="modal-footer">
                <span>Closing in @{{countdown}}s</span>
            </div>
        </div>
    </div>
</div>

//Javascript
mounted() {
    const id = '#alert' + this.item.id;
    $(id).modal("show");
    /* This is add resize and move*/
    $(".modal-content").on("mousedown", function(mousedownEvt) {
        var $draggable = $(this);
        var x = mousedownEvt.pageX - $draggable.offset().left,
            y = mousedownEvt.pageY - $draggable.offset().top;
        $("body").on("mousemove.draggable", function(mousemoveEvt) {
            $draggable.closest(".custom-modal").offset({
                "left": mousemoveEvt.pageX - x,
                "top": mousemoveEvt.pageY - y
            });
        });
        $("body").one("mouseup", function() {
            $("body").off("mousemove.draggable");
        });
        $draggable.closest(".modal").one("bs.modal.hide", function() {
            $("body").off("mousemove.draggable");
        });
    });
    /* This will remove the modal-open class from body*/
    $(id).on('shown.bs.modal', function () {
        $("body").removeClass("modal-open"); 
        $(".custom-modal").removeClass("modal");
    });

    $(id).css({
        "padding-left": $(window).width() - $('#content').width() - 310 - 90*this.index,
        "padding-top": 45 + 65*this.index
    });
}
