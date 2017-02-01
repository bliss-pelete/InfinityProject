import React, { Component } from 'react';
import { Link } from 'react-router';
import InfinityMenu from "react-infinity-menu";
import "./infinityMenu.css";

class DropdownMenu extends React.Component {

  componentWillMount() {
		const tree = [
			{
				name: "Introduction",
				id: 0,
				isOpen: false,
				children: [

					{
						name: <Link to="/intro/challenge"> Challenge </Link>,
						id: 0,
					},
					{
						name: <Link to="/intro/existant"> Existant </Link>,
						id: 1,
					},

          {
            name:<Link to="/intro/objectifs"> Objectifs </Link>,
            id:2,
          }
				]
			},
			{
				name: "Developpement",
				id: 1,
				isOpen: false,
				children: [
					{
						name: <Link to="/developpement/entretiens"> Entretiens </Link>,
						id: 0
					},

					{
						name: <Link to="/developpement/mockups"> Mockups </Link>,
						id: 1
					}
				]
			},
			{
				name: "Fonctionnalités",
				id: 2,
				isOpen: false,
				children: [

					{
						name: <Link to="/fonctionnalite/aide"> Aide </Link>,
						id: 0
					},
          {
            name: <Link to="/fonctionnalite/colloc"> Colloc </Link>,
            id: 1
          }, {
            name: <Link to="/fonctionnalite/compte"> Compte </Link>,
            id: 2
          },
          {
            name: <Link to="/fonctionnalite/etranger"> Etranger </Link>,
            id: 3
          },
         {
             name: <Link to="/fonctionnalite/notification"> Notifications </Link>,
             id: 4
          }, {
            name: <Link to="/fonctionnalite/tirelire"> Tirelire </Link>,
            id: 5
          }, {
            name: <Link to="/fonctionnalite/virement"> Virement </Link>,
            id: 6
          }
				]
			},
      {
				name: "Demo",
				id: 3,
				isOpen: false,
				children: [
					{
						name: <Link to="/demo/test"> Marvel App </Link>,
						id: 0
					},

				]
			}
		];
		this.setState({
			tree: tree
		});
	}

  onNodeMouseClick(event, tree, node, level, keyPath) {
       this.setState({
           tree: tree
       });
   }

   onLeafMouseClick(event, leaf) {
       console.log( leaf.id ); // Prints the leaf id
       console.log( leaf.name ); // Prints the leaf name
   }

   onLeafMouseUp(event, leaf) {
       console.log( leaf.id ); // Prints the leaf id
       console.log( leaf.name ); // Prints the leaf name
   }

   onLeafMouseDown(event, leaf) {
       console.log( leaf.id ); // Prints the leaf id
       console.log( leaf.name ); // Prints the leaf name
   }

   render() {
       return (
           <InfinityMenu
               tree={this.state.tree}
              onNodeMouseClick={this.onNodeMouseClick.bind(this)}
               maxLeaves={10}/*optional*/
           />
       );
   }
}
export default DropdownMenu;
