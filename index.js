//jQuery basics
$('#content').append('<nav id="my-navbar"></nav>')
$('#my-navbar').append(`<ul id="navbar-choices">
    <li class="bar" id="home-index">Home</li>
    <li class="bar" id="contact-index">Contact</li>
    <li class="bar" id="menu-index">Menu</li>
    </ul>`)
$('#content').append('<section id="page-content"></section>')
$('#page-content').append(`<h1 id="main-header">My Restaurant</h1>
                           <img id="restaurant-photo" src = "https://dyn1.heritagestatic.com/lf?set=path%5B2%2F1%2F9%2F2%2F5%2F21925175%5D&call=url%5Bfile%3Aproduct.chain%5D" alt="restaurant-photo">`
                           )


$('#contact-index').on ("click",()=>{displayPage("contact")})
$('#home-index').on ("click",()=>{displayPage("home")})
$('#menu-index').on ("click",()=>{displayPage("menu")})


function displayPage(page){
    $('#page-content').html('');
    if(page === "home"){
      return  $('#page-content').append(
                                        `<h1 id="main-header">My Restaurant</h1>
                                         <img id="restaurant-photo" src = "https://dyn1.heritagestatic.com/lf?set=path%5B2%2F1%2F9%2F2%2F5%2F21925175%5D&call=url%5Bfile%3Aproduct.chain%5D" alt="restaurant-photo">`
                                        )
    }else if (page === "contact"){
      return $('#page-content').html(
                                     `<h2 class="other-header"> Contact us in </h2>'
                                      <img id="restaurant-photo" src = "https://dyn1.heritagestatic.com/lf?set=path%5B1%2F3%2F6%2F1%2F4%2F13614564%5D&call=url%5Bfile%3Aproduct.chain%5D" alt="restaurant-photo">`
                                    )
    }else if (page ==="menu"){
    return $('#page-content').html( 
                                    `<h2 class="other-header"> Menu </h2>
                                     <ul class="smurf-menu">
                                        <li> Smurf Soup </li>
                                        <li> 3 euro </li>
                                     </ul>
                                     <ul class="smurf-menu">
                                        <li> Smurf Pie </li>
                                        <li> 4 euro </li>
                                     </ul>
                                     <ul class="smurf-menu">
                                        <li> Smurf Burger</li>
                                        <li> 7 euro</li> 
                                     </ul>  `
                                   )
    }
}