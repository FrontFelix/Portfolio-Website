$('#myForm').submit(function (e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    const email = $('#email').val();
    const name = $('#firstname').val();
    request.open("POST",
        "https://discord.com/api/webhooks/895313361640783893/ThsX_hnrIaiVjQFM90gkEMuDHJnki4RwT_fb8qLD_K7j3LidQwzupbkwCZWtAietWrt-"
        );
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "NEW Client",
        avatar_url: "",
        content: `**Email** ${email} \n**Name** ${name}`
    }

    request.send(JSON.stringify(params));
    $('.msg-sent').addClass('animate-in')
})