class Validator {
  validate(data) {
    throw new Error("Method 'validate()' must be implemented.");
  }
}

class Required extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      if (!data || !data[fieldName]) {
        errors.push({
          field: fieldName,
          issue: "REQUIRED",
          message: `${fieldName} is required`,
        });
      }
    });
    return { validate: errors.length > 0, errors };
  }
}

class Min extends Validator {
  constructor(fieldNames, min) {
    super();
    this.fieldNames = fieldNames;
    this.min = min;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (!value || value.length < this.min) {
        errors.push({
          field: fieldName,
          issue: "MIN",
          message: `${fieldName} must have at least ${this.min} characters.`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class Max extends Validator {
  constructor(fieldNames, max) {
    super();
    this.fieldNames = fieldNames;
    this.max = max;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (!value || value.length > this.max) {
        errors.push({
          field: fieldName,
          issue: "max",
          message: `${fieldName} maximal ${this.max} characters.`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class EmailFormat extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (!value || !emailRegex.test(value)) {
        errors.push({
          field: fieldName,
          issue: "EMAIL_INVALID",
          message: `${fieldName}, email format is invalid.`,
        });
      }
    });

    return { valid: errors.length === 0, errors };
  }
}

class NumberFormat extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    const numberRegex = /^\d+(\.\d+)?$/;
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (!value || !numberRegex.test(value)) {
        errors.push({
          field: fieldName,
          issue: "NUMBER_FORMAT",
          message: `${fieldName}, number format is invalid.`,
        });
      }
    });

    return { valid: errors.length === 0, errors };
  }
}

class Trim extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      const trimmedValue = value ? value.trim() : '';
      if (!trimmedValue) {
        errors.push({
          field: fieldName,
          issue: "TRIM",
          message: `${fieldName} must be trimmed!`,
        });
      }
    });

    return { valid: errors.length === 0, errors };
  }
}

class Match extends Validator {
  constructor(fieldNames, fieldNames2) {
    super();
    this.fieldNames = fieldNames;
    this.fieldNames2 = fieldNames2;
  }
  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      if (fieldNames2 !== fieldNames) {
        errors.push({
          field: fieldNames2,
          issue: "UN_MATCH",
          message: `${fieldName} and ${fieldNames2} un matched!`,
        });
      }
    });

    return { valid: errors.length === 0, errors };
  }
}

class Unique extends Validator {
  constructor(fieldNames, table, column) {
    super();
    this.fieldNames = fieldNames;
    this.table = table;
    this.column = column;
  }

  async validate(data) {
    const errors = [];

    for (const fieldName of this.fieldNames) {
      const value = data && data[fieldName];

      try {
        const getWhere = await this.table.findOne({ where: { [this.column]: value } });
        if (!value || getWhere) {
          errors.push({
            field: fieldName,
            issue: "UNIQUE",
            message: `${fieldName} must be unique.`,
          });
        }
      } catch (error) {
        console.error(error);
        errors.push({
          field: fieldName,
          issue: "DATABASE_ERROR",
          message: "Internal server error during validation.",
        });
      }
    }

    return { valid: errors.length === 0, errors };
  }
}

class Exists extends Validator {
  constructor(fieldNames, table, column) {
    super();
    this.fieldNames = fieldNames;
    this.table = table;
    this.column = column;
  }

  async validate(data) {
    const errors = [];

    for (const fieldName of this.fieldNames) {
      const value = data && data[fieldName];

      try {
        const getWhere = await this.table.findOne({ where: { [this.column]: value } });
        if (!value || getWhere) {
          errors.push({
            field: fieldName,
            issue: "EXISTS",
            message: `${fieldName} data already exists!`,
          });
        }
      } catch (error) {
        console.error(error);
        errors.push({
          field: fieldName,
          issue: "DATABASE_ERROR",
          message: "Internal server error during validation.",
        });
      }
    }

    return { valid: errors.length === 0, errors };
  }
}

class ExtensionAllowed extends Validator {
  constructor(fieldNames, allowedExtensions) {
    super();
    this.fieldNames = fieldNames;
    this.allowedExtensions = allowedExtensions;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (value) {
        const extension = value.split('.').pop();
        if (!this.allowedExtensions.includes(extension)) {
          errors.push({
            field: fieldName,
            issue: "INVALID_EXTENSION",
            message: `${fieldName} has an invalid extension`,
          });
        }
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class Uppercase extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (value && value !== value.toUpperCase()) {
        errors.push({
          field: fieldName,
          issue: "NOT_UPPERCASE",
          message: `${fieldName} must be uppercase`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class Lowercase extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (value && value !== value.toLowerCase()) {
        errors.push({
          field: fieldName,
          issue: "NOT_LOWERCASE",
          message: `${fieldName} must be lowercase`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class DateValidator extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (value && isNaN(Date.parse(value))) {
        errors.push({
          field: fieldName,
          issue: "INVALID_DATE",
          message: `${fieldName} is not a valid date`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class DateFormat extends Validator {
  constructor(fieldNames, format) {
    super();
    this.fieldNames = fieldNames;
    this.format = format; // e.g., 'YYYY-MM-DD'
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      // Example regex for YYYY-MM-DD
      const regex = /^\d{4}-\d{2}-\d{2}$/; 
      if (value && !regex.test(value)) {
        errors.push({
          field: fieldName,
          issue: "INVALID_DATE_FORMAT",
          message: `${fieldName} must be in the format ${this.format}`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class Decimal extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      if (value && !/^\d+(\.\d+)?$/.test(value)) {
        errors.push({
          field: fieldName,
          issue: "NOT_DECIMAL",
          message: `${fieldName} must be a decimal number`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

class UrlFormat extends Validator {
  constructor(fieldNames) {
    super();
    this.fieldNames = fieldNames;
  }

  validate(data) {
    const errors = [];
    this.fieldNames.forEach(fieldName => {
      const value = data && data[fieldName];
      const regex = /^(http|https):\/\/[^ "]+$/; // Basic URL format
      if (value && !regex.test(value)) {
        errors.push({
          field: fieldName,
          issue: "INVALID_URL",
          message: `${fieldName} must be a valid URL`,
        });
      }
    });
    return { valid: errors.length === 0, errors };
  }
}

export { Required, Min, Max, NumberFormat, EmailFormat, Trim, Match, Unique, Exists, ExtensionAllowed, Uppercase, Lowercase, Date, DateFormat };
