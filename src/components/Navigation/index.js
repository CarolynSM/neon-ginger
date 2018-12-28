import React, {Component} from 'react'
import './index.css'

export default class MainNavigation extends Component {
    state = {
        navItems: []
    }

    componentDidMount() {
        this.setState({navItems: this.mapNavItemsToState(this.props.navItems)})
    }

    mapNavItemsToState = navItems => {
        const newNavItems = navItems.map(item => {
            return {
                name: item,
                isCurrent: false
            }
        })
        newNavItems[0].isCurrent = true

        return newNavItems
    }

    // TODO: bring in cloneDeep() from lodash to update state
    handleClickNavItem = item => {
        const navItemsCopy = this.state.navItems
        navItemsCopy.forEach(item => item.isCurrent = false)
        const itemIdx = navItemsCopy.indexOf(item)
        navItemsCopy[itemIdx].isCurrent = true

        this.setState({navItems: navItemsCopy})

    }

    renderNavItems = () => {
        const {navItems} = this.state

        return navItems.map((item, idx) => {
            let className = 'primary_nav__li'
            if(item.isCurrent) {
                className = 'primary_nav__li selected'
            }
            return <li className={className} onClick={() => this.handleClickNavItem(item)} key={`primary-nav-item-${item.name}-${idx}`}>{item.name}</li>
        })
    }

    render() {
        return  (
            <div className="primary_nav__container">
                <ul className="primary_nav__ul">
                    {this.renderNavItems()}
                </ul>
            </div>
        )}

}
