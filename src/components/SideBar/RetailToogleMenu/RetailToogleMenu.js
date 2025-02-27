import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import moment from 'moment';
import Button from '@mui/material/Button';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CottageIcon from '@mui/icons-material/Cottage';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FunctionsIcon from '@mui/icons-material/Functions';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import './RetailToogleMenu.css';



moment.locale('ua', {
  months : 'Січень_Лютий_Березень_Квітень_Травень_Червень_Липень_Серпень_Вересень_Жовтень_Листопад_грудень'.split('_'),
  monthsShort : 'Січ._Лют._Бер_Квт._Тра_Черв_Лип._Серп_Вер._Жов._Лис._Гру.'.split('_'),
  monthsParseExact : true,
  weekdays : 'Неділя_Понеділок_Вівторок_Середа_Чертвер_Пятниця_Субота'.split('_'),
  weekdaysShort : 'Нед._Пон._Вівт._Сер._Четв._Пятн._Суб.'.split('_'),
  weekdaysMin : 'Не_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  weekdaysParseExact : true,
  longDateFormat : {
      LT : 'HH:mm',
      LTS : 'HH:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D MMMM YYYY',
      LLL : 'D MMMM YYYY HH:mm',
      LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
      sameDay : '[Сьоодні в] LT',
      nextDay : '[Завтра в] LT',
      nextWeek : 'dddd [в] LT',
      lastDay : '[Вчора в] LT',
      lastWeek : 'dddd [останній в] LT',
      sameElse : 'L'
  },
  relativeTime : {
      future : 'в %s',
      past : 'є %s',
      s : 'декілька секунд',
      m : 'одна хвилина',
      mm : '%d хвилини',
      h : 'одна година',
      hh : '%d години',
      d : 'один день',
      dd : '%d днів',
      M : 'один місяць',
      MM : '%d місяців',
      y : 'один рік',
      yy : '%d років'
  },
  dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
  ordinal : function (number) {
      return number + (number === 1 ? 'er' : 'e');
  },
  meridiemParse : /PD|MD/,
  isPM : function (input) {
      return input.charAt(0) === 'M';
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  meridiem : function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
  },
  week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // Used to determine first week of the year.
  }
});


const months =[
  {
    month: 'Січень',
    retail: '12652',
  },
  {
    month: 'Лютий',
    retail: '9465',
  },
  {
    month: 'Березень',
    retail: '13684',
  },
  {
    month: 'Квітень',
    retail: '17340',
  },
  {
    month: 'Травень',
    retail: '11398',
  },
  {
    month: 'Червень',
    retail: '16221',
  },
  {
    month: 'Липень',
    retail: '21432',
  },
  {
    month: 'Серпень',
    retail: '14230',
  },
  {
    month: 'Вересень',
    retail: '0',
  },
  {
    month: 'Жовтень',
    retail: '0',
  },
  {
    month: 'Листопад',
    retail: '0',
  },
  {
    month: 'Грудень',
    retail: '0',
  }
];

const findCurrentMonthValue  = (currentSearch) =>{
  return (currentSearch.month === String(now));
}

const now = moment().format('MMMM');
const searchNow = months.find(findCurrentMonthValue);


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
    lineHeight: '60px',
  }));

const RetailToogleMenu = () => {
  
 
  const [changedMonths,setChangedMonths]=useState(searchNow.month);
  const [changedRetail,setChangedRetail]=useState(searchNow.retail);

  const [displayDetails, setDisplayDetails] = useState(false);
  
  const productsRetail = changedRetail/2;
  const comunalsRetail = changedRetail/8;
  const otherRetail = changedRetail/4;
  const sumRetail = productsRetail + comunalsRetail + otherRetail;

  const productsList = productsRetail/3;
  const comunalsList = comunalsRetail/3;
  const otherList = otherRetail/3;

  
  // const searchCurrentMonth = months.includes( ) 
  // console.log()

 

  
  return (


      <Grid container spacing={2}>
          
          <Grid item columns={2} xs={6}>
              <Box 
                sx={{
                  p: 2,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gap: 2,
                }}>
              {months.map((currentMonth,index) => (
                <Item key={index} elevation={6}>
                      <Button 
                          onClick={ ()=> 
                            setChangedMonths(currentMonth.month) &
                            setChangedRetail(currentMonth.retail)
                          }
                         >
                          {currentMonth.month +' - '+ currentMonth.retail}
                      </Button>
                </Item>))}
                </Box>
          </Grid>
                
          <Grid item xs={6}>
              <Box 
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gap: 2,
                    width:'100%'
                  }}>
                    {months.slice(0,1).map((currentMonth,index) => (
                    <div  
                      className='currentMonth'>
                      
                      <div 
                        key={index} 
                        className='retailCurrentMonth'>
                          Розсхід за {changedMonths}
                      </div>
                        <div
                        className='retailProducts'>
                        <div>Продукти <BakeryDiningIcon className='iconMargin'></BakeryDiningIcon></div>
                        
                        <div>{productsRetail}</div>
                        </div>
                        <div 
                        className='retailComunals'>
                        <div>Комунальні <CottageIcon className='iconMargin'></CottageIcon></div>
                        
                        <div>{comunalsRetail}</div>
                        </div>
                        <div 
                        className='retailOther'>
                        <div>Інше <CelebrationIcon className='iconMargin'></CelebrationIcon></div>
                        <div>{otherRetail}</div>
                        </div>
                        <div 
                        className='retailSum'>
                        <div>Разом <FunctionsIcon className='iconMargin'></FunctionsIcon></div>
                        <div>{sumRetail}</div>
                        </div>
                        <div className='buttonForDetails'>
                          <button 
                          className='buttonStyle'
                          onClick={()=>setDisplayDetails(!displayDetails)}
                          >
                            Детальніше
                          </button>
                        </div>
                    </div>
                    ))}

                    {displayDetails ?
                    <div className='detailsContainer'>
                    <div className='productsDetailsRetail'>
                      <div className='productsDetailsRetailTitle'>Продукти</div>
                      <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Сільпо</div><div>{productsList}</div></li>
                          <li className='productsDetailRetailListItem'><div>Ашан</div><div>{productsList}</div></li>
                          <li className='productsDetailRetailListItem'><div>АТБ</div><div>{productsList}</div></li>
                        </ul>
                      </div>
                      
                    </div>
                    <div className='comunalsDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Комунальні</div>
                    <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Газ</div><div>{comunalsList}</div></li>
                          <li className='productsDetailRetailListItem'><div>Вода</div><div>{comunalsList}</div></li>
                          <li className='productsDetailRetailListItem'><div>Елекроенергія</div><div>{comunalsList}</div></li>
                        </ul>
                      </div>
                    </div>
                    <div className='otherDetailsRetail'>
                    <div className='productsDetailsRetailTitle'>Інше</div>
                    <div className='productsDetailsRetailListContainer'>
                        <ul className='productsDetailsRetailList'>
                          <li className='productsDetailRetailListItem'><div>Подорож у карпати</div><div>{otherList}</div></li>
                          <li className='productsDetailRetailListItem'><div>Мийка машини</div><div>{otherList}</div></li>
                          <li className='productsDetailRetailListItem'><div>Стрижка</div><div>{otherList}</div></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    : null}
                    
              </Box>
          </Grid>
        </Grid>
      );
};

export default RetailToogleMenu;