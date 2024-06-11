import React from "react";
import CustomLayout from "../../layout";
import { CustomStyles } from "../../theme";
import ColumnChart from "./ColumnChart";
import PieChart from "./PieChart";


interface CardProps {
    numberOfCard: number;
    gapBetween: number,
    title: string,
}

interface TimelineProps {
    title: string,
}


const Header = () => {
    return (
        <div
        style={{
            height: 138,
            padding: '20px 32px 20px 32px',
            gap: 16,
            border: '0px 0px 1px 0px',
            boxShadow: '0px 2px 4px 0px #3A414F0F',
            backgroundColor: CustomStyles.Color.Primary.White,
        }}>
            Header
        </div>
    );
}


const CardAnalytics: React.FC<CardProps> = (props) => {
    return (
        <div style={{
            height: '100%',
            width: `calc((100% - (${props.numberOfCard} - 1) * ${props.gapBetween}px) / ${props.numberOfCard})`,
            backgroundColor: CustomStyles.Color.Primary.White,
            borderRadius: '8px',
            padding: '20px',
            gap: '18px',            
            border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
            boxShadow: CustomStyles.Shadows.Elevation1,
        }}>
            {props.title}
        </div>
    );
} 

const UserReservationUtilisation = () => {
    const numberOfCard = 3;
    const gapBetween = 16;

    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '148px',
        }}>
            <CardAnalytics title="USERS" numberOfCard={numberOfCard} gapBetween={gapBetween}/>
            <CardAnalytics title="RESERVATION" numberOfCard={numberOfCard} gapBetween={gapBetween}/>
            <CardAnalytics title="UTILISATION" numberOfCard={numberOfCard} gapBetween={gapBetween}/>
        </div>
    );
}



const BarPieChart = () => {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 330,
            gap: 16,
        }}>
            
            <div      // ColumnChart
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: `calc((100% - 16px) * 58 / 100)`, // gap 16px, 58% except gap
                height: '100%',
                gap: '20px',
                padding: '20px',
                borderRadius: '8px',
                border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
                boxShadow: CustomStyles.Shadows.Elevation1,
                backgroundColor: CustomStyles.Color.Primary.White,
            }}>
                <div
                style={{
                    height: '24px',
                    gap: '18px',
                }}>
                    Reservation by Weekdays
                </div>

                <div 
                style={{
                    height: '246px',
                }}>
                    <ColumnChart />
                </div>
            </div>

            <div      // PieChart
            style={{ 
                width: `calc((100% - 16px) * 42 / 100)`, // gap 16px, 42% except gap
                height: '100%',
                gap: '20px',
                padding: '20px',
                borderRadius: '8px',
                border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
                boxShadow: CustomStyles.Shadows.Elevation1,
                backgroundColor: CustomStyles.Color.Primary.White,
            }}>
                <PieChart/>
            </div>
        </div>
    );
}

const Timeline: React.FC<TimelineProps> = (props) => {
    return (
        <div 
        style={{
            height: '306px',
            borderRadius: '8px',
            padding: '20px',
            gap: '20px',
            backgroundColor: CustomStyles.Color.Primary.White,
            border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
            boxShadow: CustomStyles.Shadows.Elevation1, 
        }}>
            {props.title} 
        </div>
    );
}



const Analytics = () => {
    return <CustomLayout>
        <div>
            <Header/>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '24px 32px 24px 32px',
                gap: 16,
            }}>
                <UserReservationUtilisation/>
                <BarPieChart/>
                <Timeline title="User TimeLine" />
                <Timeline title="Utilization TimeLine" />
            </div>
         </div>
    </CustomLayout>
}

export default Analytics;