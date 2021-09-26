/**
 * It fetches the collection from local storage.
 * @param {String} objectType
 * @returns {Array}
 */
const getCollection = (objectType) => {
	if (!objectType) return;
	let collection = localStorage.getItem(objectType.toLowerCase());
	try {
		collection = JSON.parse(collection);
	} catch (e) {
		console.log(e);
	} finally {
		return collection || [];
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

export {
	getCollection,
	saveCollection,
	isEmployeeExist,
	saveEmployee,
	getEmployeeById,
	updateEmployeeInfo
};