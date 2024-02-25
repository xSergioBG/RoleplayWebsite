import { useState, useEffect } from "react";
import { Form, Input, Row, Col, Typography, Layout, Button } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const CharacterCreator = () => {
  const [form] = Form.useForm();
  const [habilidades, setHabilidades] = useState({
    excelente: "",
    enorme: "",
    grande: "",
    bueno: "",
    normal: "",
  });

  // Cuando el componente se monta, carga los datos del localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("characterData");
    if (storedData) {
      form.setFieldsValue(JSON.parse(storedData));
    }
  }, [form]);

  const handleHabilidadesChange = (changedValues, allValues) => {
    setHabilidades(allValues.habilidades);
  };

  const handleAceptarClick = () => {
    const values = form.getFieldsValue();
    console.log("Datos del formulario:", values);

    // Guardar los datos en el localStorage
    localStorage.setItem("characterData", JSON.stringify(values));
  };

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "left" }}>
        <div style={{ maxWidth: "800px" }}>
          <Title level={2}>Creador de Personajes</Title>
          <Form
            layout="vertical"
            form={form}
            initialValues={{ habilidades }}
            onValuesChange={handleHabilidadesChange}
          >
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={3}>Identidad</Title>
              </Col>
              <Col span={12}>
                <Form.Item name={["identidad", "nombre"]} label="Nombre">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name={["identidad", "descripcion"]}
                  label="Descripción"
                >
                  <Input.TextArea autoSize={{ minRows: 3 }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={3}>Aspectos</Title>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["aspectos", "concepto"]}
                  label="Concepto Principal"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["aspectos", "complicacion"]}
                  label="Complicación"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={3}>Habilidades</Title>
              </Col>

              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Form.Item
                      name={["habilidades", "excelente"]}
                      label="Excelente (+5)"
                    >
                      <Input.Group>
                        <Row gutter={[8, 8]}>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "excelente1"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "excelente2"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "excelente3"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "excelente4"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "excelente5"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={["habilidades", "enorme"]}
                      label="Enorme (+4)"
                    >
                      <Input.Group>
                        <Row gutter={[8, 8]}>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme1"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme2"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme3"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme4"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme5"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={["habilidades", "enorme"]}
                      label="Grande (+3)"
                    >
                      <Input.Group>
                        <Row gutter={[8, 8]}>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme1"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme2"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme3"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme4"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme5"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={["habilidades", "enorme"]}
                      label="Bueno (+2)"
                    >
                      <Input.Group>
                        <Row gutter={[8, 8]}>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme1"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme2"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme3"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme4"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme5"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={["habilidades", "enorme"]}
                      label="Normal (+1)"
                    >
                      <Input.Group>
                        <Row gutter={[8, 8]}>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme1"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme2"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme3"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme4"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                          <Col span={4}>
                            <Form.Item name={["habilidades", "enorme5"]}>
                              <Input type="text" />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Input.Group>
                    </Form.Item>
                  </Col>
                  {/* Repite para las otras habilidades */}
                </Row>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Title level={3}>Extras</Title>
              </Col>
              <Col span={24}>
                <Form.Item name={["extras", "proezas"]} label="Proezas">
                  <Input.TextArea autoSize={{ minRows: 3 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["extras", "estresFisico"]}
                  label="Estrés Físico"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["extras", "estresMental"]}
                  label="Estrés Mental"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["extras", "consecuencias", "leve"]}
                  label="Leve (2)"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["extras", "consecuencias", "moderada"]}
                  label="Moderada (4)"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name={["extras", "consecuencias", "grave"]}
                  label="Grave (6)"
                >
                  <Input type="text" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" onClick={handleAceptarClick}>
                Aceptar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default CharacterCreator;
