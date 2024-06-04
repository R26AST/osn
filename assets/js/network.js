var time_start, end_time;

// The size in bytes
var downloadSize = 278;//285375;//279000; 278Kb 
var downloadImgSrc = new Image();

$('#ping_server').click(function() {
	downloadImgSrc.onload = function () {
		end_time = new Date().getTime();
		displaySpeed();
	};
	time_start = new Date().getTime();
	downloadImgSrc.src = userImageLink;
});

function displaySpeed() {
    var timeDuration = (end_time - time_start) / 1;
    var loadedBits = downloadSize * 1024 * 8;
    /* Converts a number into string
    using toFixed(2) rounding to 2 */
    var bps = (loadedBits / timeDuration).toFixed(2);
    var speedInKbps = (bps / 1024).toFixed(2);
	var speedInMBps = (speedInKbps / 1024).toFixed(2);

    if(speedInKbps > 800)
    {
        cls = 'text-success';
        cls_txt = 'Good';
    }
    else if(speedInKbps > 400)
    {
        cls = 'text-warning';
        cls_txt = 'Moderate';
    }
    else
    {
        cls = 'text-danger';
        cls_txt = 'Bad';
    }

    if(mode == 1)
    {
        $('#network_status').html('<i class="fa fa-signal '+cls+'"></i> '+cls_txt);
        //$('#network_speed').html(speedInKbps+" Kbps");
		$('#network_speed').html(speedInMBps+" MBps");
    }
    else if(mode == 2)
    {
        $.get(URL_SAVE_NETWORK_INFO+'/'+speedInKbps+'/'+cls_txt);
    }
}