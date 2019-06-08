import React,{Component} from 'react';
import { addLocaleData, IntlProvider } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'
import translations from './translations.json'
import { LANGUAGES } from './LANGUAGES.js';
  
// Setup dados de localização por idioma
addLocaleData([...pt,...en])
 
  
class IntlProviderConfigured extends Component {
    state = {
        loading: true,
        locale: ''
    }
 
    componentDidMount() {
        const currentUrlLang = window.location.pathname.split('/')[1]
        const currentLanguage = LANGUAGES[currentUrlLang]
        if(!currentLanguage) return window.location.href = `/${LANGUAGES.default}`
         
        this.setState({ locale: currentLanguage.code, loading: false })
    }
 
    render() {
        const locale = this.state.locale
        const { children } = this.props
 
        if(this.state.loading) return <div>...</div>
         
        return (
            <IntlProvider locale={locale} key={locale} messages={translations[locale]}>
                {children}
            </IntlProvider>
        )
    }
}
export default IntlProviderConfigured;