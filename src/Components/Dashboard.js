import React, { useState } from 'react'
import '../Styles/Dashboard.css'

export default function Dashboard() {
    const [barItem, setBarItem] = useState('overview');

    return (
        <>
            <div className="dashboardContainer">
                <div className="sidebar">
                    <div className="logo"></div>
                    <div className="sidebarItem" onClick={() => { setBarItem("overview") }}>Overview</div>
                    <div className="sidebarItem" onClick={() => { setBarItem("bots") }}>Bots</div>
                    <div className="sidebarItem" onClick={() => { setBarItem("finance news") }}>Finance News</div>
                    <div className="sidebarItem" onClick={() => { setBarItem("order history") }}>Order History</div>
                    <div className="sidebarItem" onClick={() => { setBarItem("account settings") }}>Account Settings</div>
                    <div className="sidebarItem" onClick={() => { setBarItem("logout") }}>Logout</div>
                </div>
                {
                    barItem == "overview" &&
                    <>
                        <AccountOverview></AccountOverview>
                    </>
                }
                {
                    barItem == "bots" &&
                    <>
                        <BotsOverview></BotsOverview>
                        <Statistics></Statistics>
                    </>
                }
            </div>
        </>
    )
}

function AccountOverview() {
    return (
        <>
            <div className="statsContainer">
                <div className="botStatsName">Account Overview</div>
                <div className="graph"></div>
                <div className="botStatsHeading">Statistics</div>
                <div className="statsColsContainer">
                    <div className="statCol">
                        <div className="botStat">Total Income: $823.42</div>
                        <div className="botStat">Total Initial Sum: $1024.54</div>
                        <div className="botStat">Number of Bots: 12</div>
                    </div>
                    <div className="statCol">
                        <div className="botStat">Trades to date: 345</div>
                        <div className="botStat">Trading Sector: Crypto</div>
                        <div className="botStat">Risk Level: 5</div>
                    </div>
                </div>
            </div>
        </>
    )
}

function BotsOverview() {
    return (
        <>
            <div className="botsOverviewContainer">
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
                <Bot></Bot>
            </div>
        </>
    )
}

function Bot() {
    return (
        <>
            <div className="botContainer">
                <div className="botOverview">
                    <div className="botName">Risky Bot 1</div>
                    <div className="botDownTime">100 days</div>
                </div>
                <div className="botGraph"></div>
                <div className="botIncome">$1000.36</div>
            </div>
        </>
    )
}

function Statistics() {
    return (
        <>
            <div className="statsContainer">
                <div className="botStatsName">Risky Bot 3</div>
                <div className="graph"></div>
                <div className="botStatsHeading">Bot Statistics</div>
                <div className="statsColsContainer">
                    <div className="statCol">
                        <div className="botStat">Total Income: $823.42</div>
                        <div className="botStat">Initial Sum: $1024.54</div>
                        <div className="botStat">Days Active: 100</div>
                    </div>
                    <div className="statCol">
                        <div className="botStat">Trades to date: 345</div>
                        <div className="botStat">Trading Sector: Crypto</div>
                        <div className="botStat">Risk Level: 5</div>
                    </div>
                </div>
            </div>
        </>
    )
}
