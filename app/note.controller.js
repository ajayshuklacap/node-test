function getData2(req, res, next){
    return res.json('done','200','done===>');
}

const getData = async (user, content) => {
    try {
      return res.json('done','200','done===>');
    } catch(e) {
      throw new Error(e.message)
    }
  }
  
module.exports = {
    getData,
    getData2
};