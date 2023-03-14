import React from "react";
import { NavTabs } from "./NavTabs";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid" id="header">
            <div className="row">
                <div>
                    <h1>
                        Nara Kim
                    </h1>
                </div>
                <div>
                    <NavTabs
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}