

app.post('',(request,response,next) => {
   const Song = Song.create(request.body);
   response.send(Song)
})
app.put('Song',(req,res,next) => {
constSong_id = req.params.Song_Name;

const Song = awaitSong.findById(Song_Name);
res.send(Song_Name

)

})


app.get('Song_Name',async (request,response,next) => {
   const Song_Name = await Kitap.find();
   response.send(Song_Name);
})


app.put('/',(request,response,next) => {
   response.send("PUT isteği")
})



app.listen(8080,() => {
   console.log("sunucu 8080 portunda çalisti");
})