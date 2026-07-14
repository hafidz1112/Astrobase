const express = require("express")
const supabase = require("@supabase/supabase-js")

const app = express()
const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "https://agnfjisdxohqwlacptvr.supabase.co"
const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbmZqaXNkeG9ocXdsYWNwdHZyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzIzMjQ0MywiZXhwIjoyMDk4ODA4NDQzfQ.shi-mxrwwSmsBl0H39QUkvCBJoPoD0dIMzqteMO7P7I"
const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get("/", async(request, response) => {
    const getBlog = await db.from("blog").select()
    console.log(getBlog)
    response.json({ getBlog })
})

app.listen(PORT, () => {
    console.log("Server runing port", PORT)
})