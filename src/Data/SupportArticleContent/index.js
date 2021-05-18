
export default function getContent(articleId) {

  const filename = `supportarticles/${articleId}.txt`

    fetch(filename)
      .then(function(response){
        return(response.text())
      })
      .then(result => {
        this.setState({code: result})
      })

}
