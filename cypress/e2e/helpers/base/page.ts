/// <reference types="cypress"/>
import Base from './base'
import PageHeader from './page.header'
import PageFooter from './page.footer'
import { ReduxStore } from './store'

export default class Page extends Base {
  header: PageHeader
  footer: PageFooter
  store: ReduxStore
  walletConnectButtonText: string
  id: string
  constructor() {
    super()
    this.store = new ReduxStore()
    this.header = new PageHeader()
    this.footer = new PageFooter()
    this.id = 'header'
    this.walletConnectButtonText = 'Connect Wallet'
  }

  visit() {
    cy.visit(`/${this.id}`)
  }
  withinPage() {
    return cy.get(`#${this.id}`)
  }

  connectWallet() {
    this.withinPage()
      .contains('button', this.walletConnectButtonText)
      .should('exist')
      .click()
  }
  requestMetamaskConnect() {
    this.connectWallet()
    cy.get('#connectMetaMask').should('exist').click()
  }

  setNetworkTo(network: 'BNB' | 'AVAX' | 'ETH') {
    const bnbConfig = {
      network: 'BNB',
      name: {
        l1: 'Binance Smart Chain',
        l2: 'Boba BNB',
      },
      networkIcon: 'bnb',
      chainIds: { L1: '56', L2: '56288' },
      networkType: 'Mainnet',
    }

    const avaxConfig = {
      network: 'AVAX',
      name: {
        l1: 'Avalanche Mainnet C-Chain',
        l2: 'Boba Avalanche',
      },
      networkIcon: 'avax',
      chainIds: { L1: '43114', L2: '43288' },
      networkType: 'Mainnet',
    }

    const payload = network === 'BNB' ? bnbConfig : avaxConfig

    cy.window().its('store').invoke('dispatch', {
      type: 'NETWORK/SET',
      payload,
    })
  }

  checkNaviagtionListBinanace() {
    this.header
      .getNavigationLinks()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 4 elements for Binanace
        expect($p).to.have.length(4)

        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          '/bridge',
          '/bridge',
          '/history',
          '/earn',
        ])

        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).text()
        })

        expect(labels.get()).to.deep.eq(['', 'Bridge', 'History', 'Earn'])
      })
  }

  checkNaviagtionListAvalanche() {
    this.header
      .getNavigationLinks()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 4 elements for Avalanche
        expect($p).to.have.length(4)

        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          '/bridge',
          '/bridge',
          '/history',
          '/earn',
        ])

        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).text()
        })

        expect(labels.get()).to.deep.eq(['', 'Bridge', 'History', 'Earn'])
      })
  }

  checkNavigationListEthereum() {
    this.header
      .getNavigationLinks()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 6 elements for Ethereum
        expect($p).to.have.length(6)

        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          '/bridge',
          '/bridge',
          '/history',
          '/earn',
          '/stake',
          '/DAO',
        ])

        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).text()
        })

        expect(labels.get()).to.deep.eq([
          '',
          'Bridge',
          'History',
          'Earn',
          'Stake',
          'Dao',
        ])
      })
  }
  checkNetworkSwitcherMainnet() {
    this.header.getNetworkSwitcher().click()

    this.header.getNetworkSwitcher().contains('Ethereum').should('exist')

    this.header
      .getNetworkSwitcher()
      .contains('Binance Smart Chain')
      .should('exist')

    this.header
      .getNetworkSwitcher()
      .contains('Avalanche Mainnet C-Chain')
      .should('exist')

    this.header.getNetworkSwitcher().click()
  }
  checkNetworkSwitcherTestnet() {
    this.header
      .getNetworkSwitcher()
      .click()
      .should('have.text', 'Ethereum (Goerli)')
      .should('have.text', 'BNB Testnet')
      .should('have.text', 'Fuji Testnet')
  }

  // check theme switching functionality
  checkThemeSwitcher() {
    this.header.getLightThemeSwitcher().click()
    this.store.verifyReduxUiState('theme', 'light')
    this.header.getDarkThemeSwitcher().click()
    this.store.verifyReduxUiState('theme', 'dark')
  }

  handleNetworkSwitchModals(networkAbbreviation: string, isTestnet: boolean) {
    cy.get(
      `button[label="Switch to ${networkAbbreviation} ${
        isTestnet ? 'Testnet' : ''
      } network"]`,
      { timeout: 90000 }
    )
      .should('exist')
      .click()

    this.store.verifyReduxStoreSetup('accountEnabled', false)
    this.store.verifyReduxStoreSetup('baseEnabled', false)

    cy.get(
      `button[label="Connect to the ${networkAbbreviation} ${
        isTestnet ? 'Testnet' : ''
      } network"]`,
      { timeout: 90000 }
    )
      .should('exist')
      .click()
  }

  switchThroughMainnetNetworks() {
    // switch to BNB
    this.header.switchNetwork('BNB')
    this.handleNetworkSwitchModals('BNB', false)
    this.allowNetworkSwitch()
    this.checkNetworkSwitchSuccessful('BNB')

    // switch to AVAX
    this.header.switchNetwork('Avalanche Mainnet')
    this.handleNetworkSwitchModals('AVAX', false)
    this.allowNetworkSwitch()
    this.checkNetworkSwitchSuccessful('AVAX')

    // switch to Ethereum
    this.header.switchNetwork('Ethereum')
    this.handleNetworkSwitchModals('ETHEREUM', false)
    this.allowNetworkSwitch()
    this.checkNetworkSwitchSuccessful('ETHEREUM')
  }

  checkNetworkSwitchSuccessful(networkAbbreviation: string) {
    this.store.verifyReduxStoreNetwork('activeNetwork', networkAbbreviation)

    this.store.verifyReduxStoreSetup('accountEnabled', true)
    this.store.verifyReduxStoreSetup('baseEnabled', true)
  }

  disconnectWallet() {
    this.header.disconnectWallet()
  }

  //******FOOTER HELPERS******//
  checkFooterLinks() {
    this.footer
      .getFooterLinks()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 4 elements
        expect($p).to.have.length(5)
        // make sure the first contains some text content
        expect($p.first()).to.contain('FAQs')
        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          'https://docs.boba.network/faq',
          'https://docs.boba.network/for-developers',
          '/bobascope',
          'https://boba.network',
          'https://boba.network/terms-of-use/',
        ])
        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).text()
        })
        expect(labels.get()).to.deep.eq([
          'FAQs',
          'Dev Tools',
          'Bobascope',
          'Boba Network Website',
          'Terms of Use',
        ])
      })
  }

  checkSocialMediaLinks() {
    this.footer
      .getSocialMediaLinks()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 4 elements
        expect($p).to.have.length(4)

        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          'https://docs.boba.network',
          'https://boba.eco/twitter',
          'https://boba.eco/discord',
          'https://boba.eco/telegram',
        ])

        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).attr('aria-label')
        })

        expect(labels.get()).to.deep.eq([
          'bobadocs',
          'twitter',
          'discord',
          'telegram',
        ])
      })
  }

  checkCopyrightAndVersion() {
    this.footer.getCompanyInfo().should('be.visible')
    this.footer.getVersionInfo().should('be.visible')
  }
}