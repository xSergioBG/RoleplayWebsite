import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Row,
  Col,
  Typography,
  Layout,
  Button,
  Collapse,
  Checkbox,
} from "antd";

// Constantes de Ant Design
const { Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

// Componente CharacterCreator
const CharacterCreator = () => {
  // Estados
  const [form] = Form.useForm();
  const [characters, setCharacters] = useState([]);
  const [formData, setFormData] = useState(null);
  const [estresFisico, setEstresFisico] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [estresMental, setEstresMental] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Efecto para cargar personajes desde el almacenamiento local
  useEffect(() => {
    const storedCharacters = localStorage.getItem("characters");
    if (storedCharacters) {
      setCharacters(JSON.parse(storedCharacters));
    }
    const storedEstresFisico = localStorage.getItem("estresFisico");
    if (storedEstresFisico) {
      setEstresFisico(JSON.parse(storedEstresFisico));
    }
    const storedEstresMental = localStorage.getItem("estresMental");
    if (storedEstresMental) {
      setEstresMental(JSON.parse(storedEstresMental));
    }
  }, []);

  // Manejador para el clic en Aceptar
  const handleAceptarClick = () => {
    form.validateFields().then((values) => {
      const newCharacter = { id: characters.length + 1, ...values };

      // Incluir valores de los checkboxes en el nuevo personaje
      newCharacter.estresFisico = {};
      newCharacter.estresMental = {};
      for (let i = 1; i <= 4; i++) {
        newCharacter.estresFisico[i] = estresFisico[i - 1];
        newCharacter.estresMental[i] = estresMental[i - 1];
      }

      const updatedCharacters = [...characters, newCharacter];
      setCharacters(updatedCharacters);

      localStorage.setItem("characters", JSON.stringify(updatedCharacters));
      form.resetFields();

      // Log de toda la información almacenada en localStorage
      console.log("Información en localStorage:");
      console.log("characters:", localStorage.getItem("characters"));
    });
  };

  // Manejador para el clic en Exportar
  const handleExportClick = () => {
    const dataToExport = {
      ...formData,
      estresFisico: estresFisico,
      estresMental: estresMental,
    };
    const formDataJSON = JSON.stringify(dataToExport, null, 2);
    downloadJSON(formDataJSON, "character.json");
  };

  // Función para renderizar los campos de habilidades dentro de un panel
  const renderHabilidadInputs = (label) => {
    const inputs = [];
    for (let i = 1; i <= 5; i++) {
      inputs.push(
        <Col span={4} key={`${label}${i}`}>
          <Form.Item name={[label, `habilidad${i}`]}>
            <Input placeholder={`Habilidad ${i}`} />
          </Form.Item>
        </Col>
      );
    }
    return (
      <Panel header={<Title level={4}>{label}</Title>} key={label}>
        <Row gutter={[8, 8]}>{inputs}</Row>
      </Panel>
    );
  };

  // Función para descargar JSON
  const downloadJSON = (data, filename) => {
    const blob = new Blob([data], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "left" }}>
        <div style={{ maxWidth: "800px" }}>
          <Title level={2}>Creador de Personajes</Title>
          <Form
            form={form}
            onFinish={handleAceptarClick}
            initialValues={{}}
            layout="vertical"
            onFieldsChange={(changedFields, allFields) => {
              setFormData(
                allFields.reduce((acc, field) => {
                  if (field.name.length > 1) {
                    const [label, skill] = field.name;
                    if (!acc[label]) {
                      acc[label] = {};
                    }
                    acc[label][skill] = field.value;
                  } else {
                    acc[field.name[0]] = field.value;
                  }
                  return acc;
                }, {})
              );
            }}
          >
            {/* Secciones del formulario */}
            {/* Identidad */}
            <Title level={3}>Identidad</Title>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="nombre"
                  label="Nombre"
                  rules={[
                    { required: true, message: "Por favor ingresa el nombre" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="descripcion"
                  label="Descripción"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa la descripción",
                    },
                  ]}
                >
                  <Input.TextArea autoSize={{ minRows: 3 }} />
                </Form.Item>
              </Col>
            </Row>
            {/* Aspectos */}
            <Title level={3}>Aspectos</Title>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="concepto"
                  label="Concepto Principal"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa el concepto principal",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="complicacion"
                  label="Complicación"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingresa la complicación",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            {/* Habilidades */}
            <Title level={3}>Habilidades</Title>
            <Collapse>
              {renderHabilidadInputs("Excelente (+5)", 5)}
              {renderHabilidadInputs("Enorme (+4)", 4)}
              {renderHabilidadInputs("Grande (+3)", 3)}
              {renderHabilidadInputs("Bueno (+2)", 2)}
              {renderHabilidadInputs("Normal (+1)", 1)}
            </Collapse>
            {/* Extras */}
            <Title level={3}>Extras</Title>
            <Row gutter={[14, 16]}>
              <Col span={12}>
                <Form.Item label="Estrés Físico">
                  <Checkbox
                    checked={estresFisico[0]}
                    onChange={(e) =>
                      setEstresFisico([
                        e.target.checked,
                        estresFisico[1],
                        estresFisico[2],
                        estresFisico[3],
                      ])
                    }
                  >
                    1
                  </Checkbox>
                  <Checkbox
                    checked={estresFisico[1]}
                    onChange={(e) =>
                      setEstresFisico([
                        estresFisico[0],
                        e.target.checked,
                        estresFisico[2],
                        estresFisico[3],
                      ])
                    }
                  >
                    2
                  </Checkbox>
                  <Checkbox
                    checked={estresFisico[2]}
                    onChange={(e) =>
                      setEstresFisico([
                        estresFisico[0],
                        estresFisico[1],
                        e.target.checked,
                        estresFisico[3],
                      ])
                    }
                  >
                    3
                  </Checkbox>
                  <Checkbox
                    checked={estresFisico[3]}
                    onChange={(e) =>
                      setEstresFisico([
                        estresFisico[0],
                        estresFisico[1],
                        estresFisico[2],
                        e.target.checked,
                      ])
                    }
                  >
                    4
                  </Checkbox>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Estrés Mental">
                  <Checkbox
                    checked={estresMental[0]}
                    onChange={(e) =>
                      setEstresMental([
                        e.target.checked,
                        estresMental[1],
                        estresMental[2],
                        estresMental[3],
                      ])
                    }
                  >
                    1
                  </Checkbox>
                  <Checkbox
                    checked={estresMental[1]}
                    onChange={(e) =>
                      setEstresMental([
                        estresMental[0],
                        e.target.checked,
                        estresMental[2],
                        estresMental[3],
                      ])
                    }
                  >
                    2
                  </Checkbox>
                  <Checkbox
                    checked={estresMental[2]}
                    onChange={(e) =>
                      setEstresMental([
                        estresMental[0],
                        estresMental[1],
                        e.target.checked,
                        estresMental[3],
                      ])
                    }
                  >
                    3
                  </Checkbox>
                  <Checkbox
                    checked={estresMental[3]}
                    onChange={(e) =>
                      setEstresMental([
                        estresMental[0],
                        estresMental[1],
                        estresMental[2],
                        e.target.checked,
                      ])
                    }
                  >
                    4
                  </Checkbox>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="consecuencias.leve" label="Leve (2)">
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="consecuencias.moderada" label="Moderada (4)">
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="consecuencias.grave" label="Grave (6)">
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>
            {/* Botones de Aceptar y Exportar */}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Aceptar
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={handleExportClick}>
                Exportar como JSON
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

// Exportar el componente
export default CharacterCreator;
