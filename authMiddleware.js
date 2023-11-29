
const isAuthenticated = async  (req, res, next) =>
{
    if(req.session.isAuthenticated)
    {
        return next()
    }else
    {
        console.log('tentou acessar mas nao esta logado')
        res.redirect('/')
    }
}

module.exports = isAuthenticated