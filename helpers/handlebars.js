module.exports={
    seleccionarSkills:(seleccionadas=[],opciones)=>{
        console.log(seleccionadas)
        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'];

        let html='';
        skills.forEach(skill=>{
            html += `
            
            <li ${seleccionadas.includes(skill)?'class="activo"':'' }>${skill}</li>
            `;
        });

        return opciones.fn().html = html;
    },
        tipoContrato: (seleccionado, opciones) => {
        return opciones.fn(this).replace(
            new RegExp(` value="${seleccionado}"`), '$& selected="selected"'
        )
 
    },
    // mostrarAlertas: (errors = {}, alertas) => {
    //     const categorias = Object.keys(errors);
    //     let html = '';
    //     if (categorias.length) {
    //       categorias.forEach(categoria => {
    //         errors[categoria].forEach(error => {
    //           html += `<div class="${categoria} alerta">${error}</div>`;
    //         });
    //       });
    //     }
    //     alertas.fn().html = html;
    //     return new Handlebars.SafeString(html);
    //   }
    // }
}