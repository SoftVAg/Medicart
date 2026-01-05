import React, { useEffect, useState } from 'react';

const initial = {
  name: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  pincode: '',
  label: 'Home',
  isDefault: false,
};

const AddressForm = ({ initialValues, onSubmit, onCancel }) => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(initialValues ? { ...initial, ...initialValues } : initial);
    setErrors({});
  }, [initialValues]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Phone must be 10 digits';
    if (!form.addressLine1.trim()) e.addressLine1 = 'Address line 1 is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state.trim()) e.state = 'State is required';
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = 'PIN code must be 6 digits';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit?.({ ...form, isDefault: !!form.isDefault });
    if (!initialValues) setForm(initial);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.card} noValidate>
      {/* Name & Phone */}
      <div style={styles.grid2}>
        <Field label="Full Name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            placeholder="Vedansh Agarwal"
            style={styles.input(errors.name)}
          />
        </Field>

        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={e => handleChange('phone', e.target.value)}
            placeholder="10 digit mobile number"
            style={styles.input(errors.phone)}
          />
        </Field>
      </div>

      <Field label="Address Line 1" error={errors.addressLine1}>
        <input
          type="text"
          value={form.addressLine1}
          onChange={e => handleChange('addressLine1', e.target.value)}
          placeholder="House no, Street"
          style={styles.input(errors.addressLine1)}
        />
      </Field>

      <Field label="Address Line 2">
        <input
          type="text"
          value={form.addressLine2}
          onChange={e => handleChange('addressLine2', e.target.value)}
          placeholder="Area, Landmark"
          style={styles.input()}
        />
      </Field>

      <div style={styles.grid3}>
        <Field label="City" error={errors.city}>
          <input
            type="text"
            value={form.city}
            onChange={e => handleChange('city', e.target.value)}
            style={styles.input(errors.city)}
          />
        </Field>

        <Field label="State" error={errors.state}>
          <input
            type="text"
            value={form.state}
            onChange={e => handleChange('state', e.target.value)}
            style={styles.input(errors.state)}
          />
        </Field>

        <Field label="PIN Code" error={errors.pincode}>
          <input
            type="text"
            value={form.pincode}
            onChange={e => handleChange('pincode', e.target.value)}
            style={styles.input(errors.pincode)}
          />
        </Field>
      </div>

      <div style={styles.rowBetween}>
        <div>
          <div style={styles.label}>Label</div>
          <div style={styles.radioGroup}>
            {['Home', 'Work', 'Other'].map(lbl => (
              <label key={lbl} style={styles.chip(form.label === lbl)}>
                <input
                  type="radio"
                  hidden
                  value={lbl}
                  checked={form.label === lbl}
                  onChange={e => handleChange('label', e.target.value)}
                />
                {lbl}
              </label>
            ))}
          </div>
        </div>

        <label style={styles.checkbox}>
          <input
            type="checkbox"
            checked={form.isDefault}
            onChange={e => handleChange('isDefault', e.target.checked)}
          />
          Set as default
        </label>
      </div>

      <div style={styles.actions}>
        {onCancel && (
          <button type="button" style={styles.secondary} onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" style={styles.primary}>
          {initialValues ? 'Save Changes' : 'Add Address'}
        </button>
      </div>
    </form>
  );
};

/* Field */
const Field = ({ label, error, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <label style={styles.label}>{label}</label>
    {children}
    {error && <span style={styles.error}>{error}</span>}
  </div>
);

/* Styles */
const styles = {
  card: {
    background: '#fff',
    padding: 24,
    borderRadius: 12,
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 },
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 },
  rowBetween: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  label: { fontSize: 13, fontWeight: 600 },
  input: (error) => ({
    padding: '10px 12px',
    borderRadius: 8,
    border: `1px solid ${error ? '#d32f2f' : '#ccc'}`,
  }),
  error: { fontSize: 12, color: '#d32f2f' },
  radioGroup: { display: 'flex', gap: 10 },
  chip: (active) => ({
    padding: '6px 14px',
    borderRadius: 20,
    border: active ? '2px solid #2fbf5d' : '1px solid #ccc',
    background: active ? '#e9f8ef' : '#fff',
    cursor: 'pointer',
  }),
  checkbox: { gap: 6 },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: 10 },
  primary: { background: '#2fbf5d', color: '#fff', padding: '10px 18px', borderRadius: 8 },
  secondary: { background: '#eee', padding: '10px 18px', borderRadius: 8 },
};

export default AddressForm;
