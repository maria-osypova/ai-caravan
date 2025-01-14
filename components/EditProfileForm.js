import styled from "styled-components";
import { StyledButton } from "./StyledButton";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  max-width: 600px;
  padding: 24px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default function EditProfileForm({ onSubmit, onCancel, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input type="hidden" name="_id" value={defaultData?._id} />
      <Label htmlFor="photo">Photo URL</Label>
      <Input
        id="photo"
        name="photo"
        type="text"
        defaultValue={defaultData?.photo}
      />
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        defaultValue={defaultData?.firstName}
      />
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        name="lastName"
        type="text"
        defaultValue={defaultData?.lastName}
      />
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        defaultValue={defaultData?.email}
      />
      <Label htmlFor="linkedin">What is your LinkedIn profile?</Label>
      <Input
        id="linkedin"
        name="linkedin"
        type="text"
        defaultValue={defaultData?.linkedin}
      />
      <Label htmlFor="role">What is your current role?</Label>
      <Input
        id="role"
        name="role"
        type="text"
        defaultValue={defaultData?.role}
      />
      <Label htmlFor="expertise">
        What best describes your area of expertise?
      </Label>
      <Select
        id="expertise"
        name="expertise"
        defaultValue={defaultData?.expertise}
      >
        <option value="AI&Data">AI&Data</option>
        <option value="Engineering">Engineering</option>
        <option value="Business">Business</option>
        <option value="Product">Product</option>
        <option value="Marketing">Marketing</option>
        <option value="Operations">Operations</option>
        <option value="Investments">Investments</option>
      </Select>
      <StyledButton onClick={onCancel}>Cancel</StyledButton>
      <StyledButton type="submit">Save</StyledButton>
    </FormContainer>
  );
}
