export async function onRequest() {

const tools = ["ai-writer","ai-chatbot","ai-assistant"]

const professions = [
"lawyers",
"accountants",
"engineers"
]

const cities = [
"cape-town",
"johannesburg",
"durban"
]

let urls = []

tools.forEach(t=>{
professions.forEach(p=>{
cities.forEach(c=>{

urls.push(
`<url><loc>https://howzitai.co.za/${t}-for-${p}-in-${c}</loc></url>`
)

})
})
})

return new Response(

`<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${urls.join("")}

</urlset>`,

{headers:{"content-type":"application/xml"}}

)

}
