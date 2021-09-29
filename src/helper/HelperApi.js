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
    localStorage.setItem(
        objectType.toLowerCase(),
        JSON.stringify(collectionArr)
    );
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
            teams: [],
        };
        let collection = getCollection("departments");
        if (collection.length) {
            departmentObject.id = collection[collection.length - 1].id + 1;
        } else {
            departmentObject.id = 1;
        }
        collection.push(departmentObject);
        saveCollection("departments", collection);
        return collection;
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
    return getCollection("departments").some((department) => {
        return department.name === departmentName.toLowerCase();
    });
};

/**
 * Checks whether ant object is present or not based on name property.
 * @param {String} name
 * @param {Array} collection
 * @returns {Boolean}
 */
const isObjectExist = (name, collection) => {
    return collection.some((obj) => {
        return obj.name === name.toLowerCase();
    });
};

/**
 * Checks whether employee already exist in the collection or not.
 * @param {EmployeeObject} employee object
 * @returns {Boolean}
 */
const isEmployeeExist = ({ email }) => {
    return getCollection("employees").filter((emp) => {
        return email && email.toLowerCase() === emp.email.toLowerCase();
    }).length;
};

/**
 * Saves the new object in collection.
 * @param {String} objectType Collection type
 * @param {EmployeeObject} employeeObject to be saved
 */
const saveEmployee = (objectType = "employees", employeeObject) => {
    if (!isEmployeeExist(employeeObject)) {
        let collection = getCollection(objectType);
        if (collection.length) {
            employeeObject.id = collection[collection.length - 1].id + 1;
        } else {
            employeeObject.id = 1;
        }
        collection.push(employeeObject);
        saveCollection("employees", collection);
        return { collection };
    } else {
        return { error: "Employee already exist." };
    }
};

/**
 * Updates the employee information in collection.
 * @param {EmployeeObject} employeeObject
 */
const updateEmployeeInfo = (employeeObject) => {
    const collection = getCollection("employees");
    if (collection.length) {
        collection.forEach((emp) => {
            if (employeeObject.id === emp.id) {
                emp.name = employeeObject.name;
                emp.email = employeeObject.email;
                emp.phoneNumber = employeeObject.phoneNumber;
            }
        });
        saveCollection("employees", collection);
        return { collection };
    }
};

/**
 * Finds the employee object from ID.
 * @param {Number} employeeId
 * @returns EmployeeObject
 */
const getEmployeeById = (employeeId, collection) => {
    return collection.find(({ id }) => {
        return id === employeeId;
    });
};

/**
 * Finds the object object from ID.
 * @param {Number} employeeId
 * @returns EmployeeObject
 */
const getObjectById = (collection, objectId) => {
    return collection.find(({ id }) => {
        return id === +objectId;
    });
};

const getExistingTeam = (departmentId, teamId, collection) => {
    const department = getObjectById(collection, +departmentId);
    if (department) {
        const team = getObjectById(department.teams, +teamId);

        return team ? team : {};
    }

    return {};
};

/**
 * Store team data.
 * @param {Object} teamObject
 * @returns {Object}
 */
const saveTeam = (teamObject) => {
    const departments = getCollection("departments");

    const department = departments.find((de) => {
        return de.id === teamObject.departmentId;
    });
    const employees = getCollection("employees");
    if (!isObjectExist(teamObject.name, department.teams)) {
        const teams = department.teams;
        if (teams.length) {
            teamObject.id = teams[teams.length - 1].id + 1;
        } else {
            teamObject.id = 1;
        }
        department.teams.push(teamObject);

        const selectedMembers = employees.filter(({ id }) => {
            return (
                teamObject.teamMembers.includes(id) ||
                id === teamObject.teamLeader
            );
        });

        selectedMembers.forEach((emp) => {
            if (teamObject.teamLeader === emp.id) {
                emp.position = "team leader";
            } else {
                emp.position = "team member";
            }
            emp.departmentId = teamObject.departmentId;
            emp.teamId = teamObject.id;
        });
    }

    saveCollection("employees", employees);
    saveCollection("departments", departments);

    return {
        updatedEmployees: employees,
        updatedDepartments: departments,
    };
};

const updateTeam = (teamObject) => {
    const departments = getCollection("departments");
    const employees = getCollection("employees");

    const department = departments.find((de) => {
        return de.id === teamObject.departmentId;
	});

    // fetch old team info in order to update the info
    // like teamLeader and teamMembers
    const team = department.teams.find((te) => {
        return te.id === teamObject.id;
    });

    // updating position for old memebers and leader
    const teamLeader = employees.find((emp) => emp.id === team.teamLeader);
    teamLeader.position = null;
    teamLeader.teamId = null;
    teamLeader.departmentId = null;
    const oldMembers = employees.filter((emp) =>
        team.teamMembers.includes(emp.id)
    );
    oldMembers.forEach((mem) => {
        teamLeader.position = null;
        teamLeader.teamId = null;
        teamLeader.departmentId = null;
    });

    // updating information for updated members
    const selectedMembers = employees.filter(({ id }) => {
        return (
            teamObject.teamMembers.includes(id) || id === teamObject.teamLeader
        );
    });

    selectedMembers.forEach((emp) => {
        if (teamObject.teamLeader === emp.id) {
            emp.position = "team leader";
        } else {
            emp.position = "team member";
        }
        emp.departmentId = teamObject.departmentId;
        emp.teamId = teamObject.id;
    });

    team.name = teamObject.name;
    team.teamLeader = teamObject.teamLeader;
    team.teamMembers = teamObject.teamMembers;

    saveCollection("employees", employees);
    saveCollection("departments", departments);

    return {
        updatedEmployees: employees,
        updatedDepartments: departments,
	}
};


/**
   * Basically I'm creating object for dropdown options
   * @param {*} collection
   * @returns
   */
 const filterEmployees = (collection, teamId, departmentId) => {
    return collection.filter(emp => {
      return (!emp.departmentId && !emp.teamId) || (emp.teamId === teamId && emp.departmentId === departmentId)
    }).map(({ id, name }) => {
      return {
        key: id,
        text: name,
        value: id,
      };
    });
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
    isObjectExist,
    getExistingTeam,
	updateTeam,
	filterEmployees
};