const pool = require('./db')

const home = async (req, res) =>
{
    const {rows} = await pool.query('SELECT * FROM cliente ORDER BY nome')
    res.render('home',{resultado : rows})
 
}

const dashboard = async (req, res) =>
{
    res.send('<html><header><title>DASHBOARD</title></header><body> <h6>DASHBOArd <br> <a href="/logout">LOGOUT</a>'+
    '<br> <a href="/"> HOME </a></body> </html>')

}

const viewAdd = async (req, res) =>
{
    res.render('add')
}

const verificaLogin = async (req, res) =>
{
    const {senha} = req.body

    console.log('senha: '+senha)
    if(senha=='123')
    {
        req.session.isAuthenticated = true
        res.redirect('/dashboard')
        console.log('correto')
    }else
    {
        console.log('errou')
        res.status(204).end()
    }
}

const logout = async (req, res) =>
{
    req.session.destroy()
    res.redirect('/')
}

const salvar = async (req, res) =>
{
    const {nome} = req.body
    const {rows} = await pool.query('INSERT INTO cliente (nome) values ($1)',[nome])
    res.redirect('/')
}

const update = async (req, res) =>
{
    const {nome} = req.body
    const {codigo} = req.params
    const {linhas} = await pool.query('UPDATE cliente SET nome=$1 WHERE codigo = $2 ',[nome,codigo])
    //res.redirect('/')
    const {rows} = await pool.query('SELECT * FROM cliente')
    console.log('query',rows)
    res.json(rows)
}

module.exports = {home,dashboard,verificaLogin,logout,salvar,viewAdd,update}