$(document).ready(function(){
    $('#downloadPdf').click(function(){
        $('#Invoice_container').printThis();
    });
});