describe('Gif App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.request('POST', 'http://localhost:8000/api/testing/users/reset')
    cy.request('POST', 'http://localhost:8000/api/testing/favs/reset')
    cy.clearSessionStorage()
    const user = {
      username: 'juanito',
      password: 'asdasdasd'
    }
    cy.request('POST', 'http://localhost:8000/register', user)
  })
  it('homepage can be opened', () => {
    cy.get('h2').should('contain', 'Giffy')
  })

  it('search form exist', () => {
    cy.get('#search-form').should('be.visible')
  });

  it('default gifs are load', () => {
    cy.get('h3').should('contain', 'Última busquedas')
    cy.get('#list-of-gifs').should('be.visible')
    cy.get('#list-of-gifs').find('img').should('have.length', 6)

  });

  it('login form can be opened', () => {
    cy.contains('Logín').click()
  })

  it('user can login', () => {
    cy.login({ username: 'juanito', password: 'asdasdasd' })
    cy.get('header div').find('button').should('exist')

  })

  it('login fail when password is wrong', () => {
    cy.login({ username: 'juanito', password: 'wrongpassword' })
    cy.get('header div').find('button').should('not.exist')
  })

  it('login form show alerts when password is wrong', () => {
    cy.contains('Logín').click()
    cy.get('[name="username"]').type('juanito')
    cy.get('[name="password"]').type('wrongpassword')
    cy.get('#login-form-button').click()
    cy.get('strong').should('contain', 'Credentials are invalid')
  });

  it('fav button shows a modal when user is not login', () => {
    cy.get('#fav-button').click()
    cy.get('#modal-root div').should('be.visible')
  });

  it('list of trending must be shown when user scrolls to botton', () => {
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.get('h1').should('contain', 'Tendencias')
    cy.get('ul li').find('a').should('have.length', 20)
  });

  it('search form works correctly', () => {
    cy.get('input[placeholder="Search gifs here..."]').type('Avengers')
    cy.contains('Buscar').click()
    cy.get('h3').should('contain', 'Avengers')
    cy.get('#list-of-gifs').should('be.visible')
    cy.get('#list-of-gifs').find('img').should('have.length', 6)
  });

  describe('when user is login', () => {
    beforeEach(() => {
      cy.login({ username: 'juanito', password: 'asdasdasd' })
    })

    it('add and delete gif to favorites', () => {
      cy.reload()
      cy.addFav({ gifId: '26tn33aiTi1jkl6H6' })
      cy.get('[aria-label="Remove Gif from favorites"]').should('exist')
      cy.deleteFav({ gifId: '26tn33aiTi1jkl6H6' })
      
      cy.wait(2000)
      cy.get('[aria-label="Remove Gif from favorites"]').should('not.exist')
    });

  })
})
