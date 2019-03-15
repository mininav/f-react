import React, {useState, useEffect} from "react";
import Workplaces from "../components/Workplaces";
import PropTypes from 'prop-types';
import Websocket from "../utils/Websocket";
import Users from "../components/Users";

AdminPage.propTypes = {
    login: PropTypes.object,
    websocket: PropTypes.instanceOf(Websocket)
};

function AdminPage (props) {

    useEffect(() => {

        props.websocket.send({
            getWorkplaces: {}
        });

        props.websocket.send({
            getUsers: {}
        });

        props.websocket.send({
            getWorkplaceRegistrations: {}
        });

        props.websocket.send({
            getUserRegistrations: {}
        });

    }, []);


    const [users, setUsers] = useState([]);
    useEffect(() => {
        const property="users";
        const id = props.websocket.addMsgEventListener(property, (users) => {
            setUsers(
                Object.keys(users).reduce((map, key) => {
                    map[key] = users[key];
                    return map;
                    }, [])
            );
        });

        const property2 = "userUpdates";
        const id2 = props.websocket.addMsgEventListener(property2, (updates) => {
            setUsers(
                Object.keys(updates).reduce((map, key) => {
                    if (!updates[key].deleted) {
                        map[key] = updates[key];
                    } else {
                        delete map[key];
                    }

                    return map;

                }, users)
            )

        });

        return () => {
            props.websocket.removeMsgEventListener(property, id);
            props.websocket.removeMsgEventListener(property2, id2);
        }

    }, []);
    const [workplaceRegistration, setWorkplaceRegistration] = useState([]);
    const [userRegistration, setUserRegistration] = useState([]);

    const [workplaces, setWorkplaces] = useState([]);
    useEffect(() => {
        const property = "workplaces";
        const id = props.websocket.addMsgEventListener(property, (workplaces) => {
            setWorkplaces(
                Object.keys(workplaces).reduce((map, key) => {
                    map[key] = workplaces[key];
                    return map;
                    }, [])
            );
        });

        const property2 = "workplaceUpdates";
        const id2 = props.websocket.addMsgEventListener(property2, (updates) => {
            setUsers(
                Object.keys(updates).reduce((map, key) => {
                    if (!updates[key].deleted) {
                        map[key] = updates[key];
                    } else {
                        delete map[key];
                    }

                    return map;

                }, workplaces)
            )

        });

        return () => {
            props.websocket.removeMsgEventListener(property, id);
            props.websocket.removeMsgEventListener(property2, id2);
        }
    }, []);

    return (
        <div>
            <h1>Admin page</h1>
            <Workplaces items={workplaces} />
            <Users items={users}/>

        </div>
    )
}

export default AdminPage;