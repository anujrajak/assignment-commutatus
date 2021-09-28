/**
 * It fetches the collection from local storage.
 * @param {String} objectType
 * @returns {Array}
 */
const getCollection = (objectType) => {
	if (!objectType) return;
	let collection = localStorage.getItem(objectType.toLowerCase());
	try {
		if (collection) {
			collection = JSON.parse(collection);
		} else {
			collection = [];
			saveCollection(objectType, collection);
		}
	} catch (e) {
		console.log(e);
	} finally {
		return collection;
	}
};

/**
 * Sets the item in the local storage.
 * @param {String} objectType
 * @param {Array} collectionArr
 * @returns
 */
const saveCollection = (objectType, collectionArr) => {
	if (!objectType) return;
	localStorage.setItem(objectType.toLowerCase(), JSON.stringify(collectionArr));
};

/**
 * It saves the new department
 * @param {String} departmentName
 * @returns
 */
const saveDepartment = (departmentName) => {
	if (!isDepartmentExist(departmentName)) {
		const departmentObject = {
			name: departmentName.toLowerCase(),
			teams: []
		};
		let collection = getCollection('departments');
		if (collection.length) {
			departmentObject.id = collection[collection.length - 1].id + 1;
		} else {
			departmentObject.id = 1;
		}
		collection.push(departmentObject);
		saveCollection('departments', collection);
	} else {
		return { error: "Department already exist." };
	}
};


/**
 * Checks whether department already exist or not.
 * @param {String} departmentName
 * @returns
 */
const isDepartmentExist = (departmentName) => {
	return getCollection('departments').some(department => {
		return department.name === departmentName.toLowerCase();
	});
}


/**
 * Checks whether ant object is present or not based on name property.
 * @param {String} name
 * @param {Array} collection
 * @returns {Boolean}
 */
const isObjectExist = (name, collection) => {
	return collection.some(obj => {
		return obj.name === name.toLowerCase();
	});
}

/**
 * Checks whether employee already exist in the collection or not.
 * @param {EmployeeObject} employee object
 * @returns {Boolean}
 */
const isEmployeeExist = ({ email }) => {
	return getCollection('employees').filter(emp => {
		return email && email.toLowerCase() === emp.email.toLowerCase();
	}).length;
};

/**
 * Saves the new object in collection.
 * @param {String} objectType Collection type
 * @param {EmployeeObject} employeeObject to be saved
 */
const saveEmployee = (objectType = 'employees', employeeObject) => {
	if (!isEmployeeExist(employeeObject)) {
		let collection = getCollection(objectType);
		if (collection.length) {
			employeeObject.id = collection[collection.length - 1].id + 1;
		} else {
			employeeObject.id = 1;
		}
		collection.push(employeeObject);
		saveCollection('employees', collection);
	} else {
		return { error: "Employee already exist." };
	}
};

/**
 * Updates the employee information in collection.
 * @param {EmployeeObject} employeeObject
 */
const updateEmployeeInfo = (employeeObject) => {
	const collection = getCollection('employees');
	if (collection.length) {
		collection.forEach(emp => {
			if (employeeObject.id === emp.id) {
				emp.name = employeeObject.name;
				emp.email = employeeObject.email;
				emp.phoneNumber = employeeObject.phoneNumber;
			}
		});
		saveCollection('employees', collection);
	}
};

/**
 * Finds the employee object from ID.
 * @param {Number} employeeId
 * @returns EmployeeObject
 */
const getEmployeeById = (employeeId) => {
	return getCollection('employees').find(({ id }) => {
		return id === employeeId
	});
};

/**
 * Finds the object object from ID.
 * @param {Number} employeeId
 * @returns EmployeeObject
 */
 const getObjectById = (collection, objectId) => {
	return collection.find(({ id }) => {
		return id === +objectId
	});
 };


/**
 * Store team data.
 * @param {Object} teamObject
 * @returns {Object}
 */
const saveTeam = (teamObject) => {
	const departments = getCollection('departments');
	if (departments.length) {
		teamObject.id = departments[departments.length - 1].id + 1;
	} else {
		teamObject.id = 1;
	}
	const employees = getCollection('employees');
	departments.forEach(dep => {
		if (dep.id === teamObject.departmentId && !isObjectExist(teamObject.name, dep.teams)) {
			dep.teams.push(teamObject);

			const selectedMembers = employees.filter(({ id }) => {
				return teamObject.teamMembers.includes(id);
			});

			selectedMembers.forEach(emp => {
				emp.departmentId = teamObject.departmentId;
				emp.teamId = teamObject.id;
			});
		}
	});

	saveCollection('employees', employees);
	saveCollection('departments', departments);

	return {
		updatedEmployees: employees,
		updatedDepartments: departments
	}
};

export {
	getCollection,
	saveCollection,
	isEmployeeExist,
	saveEmployee,
	getEmployeeById,
	getObjectById,
	updateEmployeeInfo,
	saveDepartment,
	isDepartmentExist,
	saveTeam,
	isObjectExist
};