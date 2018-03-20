import { connect } from 'react-redux';
import SitePayBancos from '../components/SitePayBancos';
import { selectBank } from '../actions/index';
import { bindActionCreators } from 'redux';

function mapStateToProps(state){
    return { bancos : state.banks }
   }

function mapDispatchToProps (dispatch){
    return bindActionCreators({ onBancoClick : selectBank}, dispatch)
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SitePayBancos)