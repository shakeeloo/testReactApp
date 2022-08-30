import React, { Component } from 'react'
import  "./Table.css";

export default class StaticTableClass extends Component {
    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Doe123@gmail.com</td>
                        <td>0294703940232</td>
                        <td><button>Delete</button></td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Doe123@gmail.com</td>
                        <td>0294703940232</td>
                        <td><button>Delete</button></td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Doe123@gmail.com</td>
                        <td>0294703940232</td>
                        <td><button>Delete</button></td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Doe123@gmail.com</td>
                        <td>0294703940232</td>
                        <td><button>Delete</button></td>

                    </tr>
                    <tr>
                        <td>5</td>
                        <td>John</td>
                        <td>Doe</td>
                        <td>Doe123@gmail.com</td>
                        <td>0294703940232</td>
                        <td><button>Delete</button></td>

                    </tr>
                </tbody>
            </table>
        )
    }
}
