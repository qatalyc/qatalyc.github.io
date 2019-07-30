$.ajax({
        url: 'https://api.sendgrid.com/v3/mail/send',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "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")
        }, success: function(data){
            alert(data);
            //process the JSON data etc
        }
})
