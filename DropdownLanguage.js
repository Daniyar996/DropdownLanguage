import React, {useEffect, useState} from 'react'
import {Select, Typography} from "antd";
import {CaretDownOutlined} from '@ant-design/icons'
import {useTranslation} from 'react-i18next'
import {Kg, Ru} from "react-flags-select";
import appStore from "../store/AppStore";
import LocalStorage from "../store/LocalStorage";

const {Option} = Select
const {Text} = Typography

const FlagList = [<Ru/>, <Kg style={{width: '100xp'}}/>]

const DropdownLanguage = () => {
  const [flag, setFlag] = useState(FlagList[0]);
  const [language, setLanguage] = useState(appStore.language);
  const {t} = useTranslation();

  const changeFlag = (lang) => {
    switch (lang) {
      case 'ky-KG':
        setLanguage(lang)
        appStore.setLanguage(lang)
        setFlag(FlagList[1])
        break;
      case 'ru-RU':
        setLanguage(lang)
        appStore.setLanguage(lang)
        setFlag(FlagList[0])
        break;
      default:
        return setFlag(FlagList[0])
    }
  }
  useEffect(() => {
    let lang = LocalStorage.get('language')
    changeFlag(lang)
  }, [])

  return (
    <div className='select-language'>
      <Text className='flagText'>
        {flag}
      </Text>

      <Select
        suffixIcon={<CaretDownOutlined/>}
        value={language}
        size="small"
        onChange={(e) => changeFlag(e)}
        className='select-language-ant'
        dropdownMatchSelectWidth={false}
      >
        <Option value='ru-RU'>Русский</Option>
        <Option value='ky-KG'>Кыргызча</Option>
      </Select>
    </div>
  )
}
export default DropdownLanguage
