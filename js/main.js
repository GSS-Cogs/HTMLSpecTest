fetch("info.json")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        createHTML(data)
    })

function createHTML(infoData) {
    var rawTemplate = document.getElementById("specTemplate").innerHTML
    var compiledTemplate = Handlebars.compile(rawTemplate)
    var ourHTML = compiledTemplate(infoData)

    var specContainer = document.getElementById("meta-data")
    specContainer.innerHTML = ourHTML
}

Handlebars.registerHelper('buildHref',
    function(link, value) {
        return link + value
    })
