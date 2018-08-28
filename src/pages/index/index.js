import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import DatePicker from '../../components/date_picker/datePicker'

import './index.less'

export default class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount () {
        console.log('will mount')
    }

    componentDidMount () { console.log('did mount') }

    componentWillUnmount () { console.log('un mount') }

    componentDidShow () { console.log('did show') }

    componentDidHide () { console.log('did hide') }

    click() {
        console.log(this)
    }

    render () {
        return (
            <View className='index'>
                <Text onClick={this.click}>Hello world!</Text>
                <slider />
                <DatePicker />
                <navigator url='../news-detail/news-detail' hover-class='navigator-hover'>
                    <button type='primary'>下一页</button>
                </navigator>
            </View>
        )
    }
}

